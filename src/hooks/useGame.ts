import { useQuery } from "@tanstack/react-query";
import APICleint from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APICleint<Game>('/games');

const useGame = (slug: string) => useQuery({
   queryKey: ['games', slug],
   queryFn: () => apiClient.get(slug)
});

export default useGame;