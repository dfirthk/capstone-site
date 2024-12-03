import { useState } from 'react';
import Game from '../entities/Game';
import Genre from '../entities/Genre';
import Platform from '../entities/Platform';

export const useSelection = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [selectedGames, setSelectedGames] = useState<Game[]>([]);

  const toggleSelection = <T extends { id: number }>(
    selectedItems: T[],
    setSelectedItems: React.Dispatch<React.SetStateAction<T[]>>,
    item: T
  ) => {
    setSelectedItems((prevSelectedItems) => {
      const isSelected = prevSelectedItems.some((i) => i.id === item.id);
      if (isSelected) {
        return prevSelectedItems.filter((i) => i.id !== item.id);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  const togglePlatformSelection = (platform: Platform) => {
    toggleSelection(selectedPlatforms, setSelectedPlatforms, platform);
  };

  const toggleGenreSelection = (genre: Genre) => {
    toggleSelection(selectedGenres, setSelectedGenres, genre);
  };

  const toggleGameSelection = (game: Game) => {
    toggleSelection(selectedGames, setSelectedGames, game);
  };

  return {
    selectedPlatforms,
    selectedGenres,
    selectedGames,
    togglePlatformSelection,
    toggleGenreSelection,
    toggleGameSelection,
  };
};