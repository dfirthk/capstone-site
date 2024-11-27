import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import Genre from "../entities/Genre";
import Platform from "../entities/ParentPlatform";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

export interface GenreQuery { 
	genre: Genre | null;
	sortOrder: string;
	searchText: string;
 }
 
const apiClient = new APIClient<Genre>('/genres');

const getGenres = () => {
	const genreQuery = useGameQueryStore(s => s.gameQuery);
	
	return useInfiniteQuery<FetchResponse<Genre>, Error>({
		queryKey: ['genres', genreQuery],
		queryFn: ({pageParam = 1}) =>
			apiClient
				.getAll({
					params: { 
						genres: genreQuery.platformId,
						ordering: genreQuery.sortOrder,
						search: genreQuery.searchText,
						page: pageParam
						},
				}),
				getNextPageParam: (lastPage, allPages) => {
					return lastPage.next ? allPages.length + 1 : undefined;
				},
				staleTime: ms('24h')
	})
}
	
export default getGenres;