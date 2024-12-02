import { useState } from 'react';
import Platform from '../entities/Platform';

export const usePlatformSelection = () => {
    const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);

    const togglePlatformSelection = (platform: Platform) => {
        setSelectedPlatforms((prevSelectedPlatforms) => {
            const isSelected = prevSelectedPlatforms.some((item) => item.id === platform.id);
            if (isSelected) {
                return prevSelectedPlatforms.filter((item) => item.id !== platform.id);
            } else {
                return [...prevSelectedPlatforms, platform];
            }
        });
    };

    return { selectedPlatforms, togglePlatformSelection };
};