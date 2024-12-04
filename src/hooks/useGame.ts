import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APICleint from "../services/libraryApi-Client";

const apiClient = new APICleint<Game>('/games');

const useGame = (slug: string) => useQuery({
   queryKey: ['games', slug],
   queryFn: () => apiClient.get(slug)
});

export default useGame;