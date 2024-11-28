import { useState } from 'react';

type SelectionType = 'game' | 'platform' | 'genre';

interface Selection {
   type: SelectionType;
   value: string;
}

export const useSelection = () => {
   const [selectedItems, setSelectedItems] = useState<Selection[]>([]);
   const toggleSelection = (type: SelectionType, value: string) => {
      setSelectedItems(prevItems => {
         const existingItem = prevItems.some(item => item.type === type && item.value === value);
         if (existingItem) {
            return prevItems.filter(item => !(item.type === type && item.value === value))
         } else {
            return [... prevItems, { type, value}];
         }
      });
   };

   return {selectedItems, toggleSelection};
};