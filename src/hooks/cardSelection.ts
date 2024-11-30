import { useState } from 'react';

type SelectionType = 'game' | 'platform' | 'genre';

interface Selection {
  type: SelectionType;
  value: string;
}

export const useSelection = () => {
  const [selectedItems, setSelectedItems] = useState<Selection[]>([]);

  const toggleSelection = (type: SelectionType, value: string) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.type === type && item.value === value
      );
  
      const updatedSelection = existingItem
        ? prevItems.filter((item) => item.type !== type || item.value !== value)
        : [...prevItems, { type, value }];
  
      console.log('Updated Selection:', updatedSelection); // Log to verify
      return updatedSelection;
    });
  };
  

  return { selectedItems, toggleSelection };
};
