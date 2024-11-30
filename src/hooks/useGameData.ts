import { useEffect, useState } from 'react';

type Genre = {id: number, name: string};
type Platform = {id: number, name: string};
type Game = {id: number, name: string, genres: Genre[], platforms: Platform[]};

export const useGameData = () => {
   const [genres, setGenres] = useState<Genre[]>([]);
   const [platforms, setPlatforms] = useState<Platform[]>([]);
   const [games, setGames] = useState<Game[]>([]);

   //Fetching each type from Rawg API
   useEffect(() => {
      //Fetching the genres from Rawg API
      fetch('https://api.rawg.io/api/genres')
      .then(response => response.json())
      .then(data => setGenres(data.results));

      //Fetching the platforms from Rawg API
      fetch('https://api.rawg.io/api/platforms')
      .then(response => response.json())
      .then(data => setPlatforms(data.results));

      //Fetching the games from Rawg API
      fetch('https://api.rawg.io/api/games')
      .then(response => response.json())
      .then(data => setGames(data.results));
   }, []);

   return {genres, platforms, games};
};