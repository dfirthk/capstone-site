import { useEffect, useState } from 'react';

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
         
         
         let updatedItems;
         if (existingItem) {
            updatedItems = prevItems.filter(item => !(item.type === type && item.value === value));
         } else {
            updatedItems = [...prevItems, { type, value }];
         }

         console.log('Current Selection:', updatedItems);
         return updatedItems;
      });
   };

   return { selectedItems, toggleSelection };
};
