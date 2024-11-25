import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
	const gameQuery = useGameQueryStore(s => s.gameQuery);
	
	return useInfiniteQuery<FetchResponse<Platform>, Error>({
		queryKey: ['parent_platforms', gameQuery],
		queryFn: ({pageParam = 1}) =>
			apiClient
				.getAll({
					params: {
						parent_platforms: gameQuery.platformId,
						ordering: gameQuery.sortOrder,
						search: gameQuery.searchText,
						page: pageParam
						},
				}),
				getNextPageParam: (lastPage, allPages) => {
					return lastPage.next ? allPages.length + 1 : undefined;
				},
				staleTime: ms('24h')
	})
}
	
export default usePlatforms;


