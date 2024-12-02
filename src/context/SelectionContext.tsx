import React, { createContext, useContext } from 'react';
import Game from '../entities/Game';
import Genre from '../entities/Genre';
import Platform from '../entities/Platform';
import { useSelection } from '../hooks/useSelection';

interface SelectionContextProps {
	selectedPlatforms: Platform[];
	selectedGenres: Genre[];
	selectedGames: Game[];
	togglePlatformSelection: (platform: Platform) => void;
	toggleGenreSelection: (genre: Genre) => void;
	toggleGameSelection: (game: Game) => void;
}

const SelectionContext = createContext<SelectionContextProps | undefined>(
	undefined
);

export const SelectionProvider: React.FC<React.PropsWithChildren<{}>> = ({
	children,
}) => {
	const {
		selectedPlatforms,
		selectedGenres,
		selectedGames,
		togglePlatformSelection,
		toggleGenreSelection,
		toggleGameSelection,
	} = useSelection();

	return (
		<SelectionContext.Provider
			value={{
				selectedPlatforms,
				selectedGenres,
				selectedGames,
				togglePlatformSelection,
				toggleGenreSelection,
				toggleGameSelection,
			}}
		>
			{children}
		</SelectionContext.Provider>
	);
};

export const useSelectionContext = () => {
	const context = useContext(SelectionContext);
	if (!context) {
		throw new Error(
			'useSelectionContext must be used within a SelectionProvider'
		);
	}
	return context;
};
