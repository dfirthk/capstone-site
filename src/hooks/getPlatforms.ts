import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import Platform from "../entities/ParentPlatform";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

export interface PlatformQuery { 
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
 }
 
const apiClient = new APIClient<Platform>('/platforms');

const getPlatforms = () => {
	const platformQuery = useGameQueryStore(s => s.gameQuery);
	
	return useInfiniteQuery<FetchResponse<Platform>, Error>({
		queryKey: ['platforms', platformQuery],
		queryFn: ({pageParam = 1}) =>
			apiClient
				.getAll({
					params: { 
						parent_platforms: platformQuery.platformId,
						ordering: platformQuery.sortOrder,
						search: platformQuery.searchText,
						page: pageParam
						},
				}),
				getNextPageParam: (lastPage, allPages) => {
					return lastPage.next ? allPages.length + 1 : undefined;
				},
				staleTime: ms('24h')
	})
}
	
export default getPlatforms;