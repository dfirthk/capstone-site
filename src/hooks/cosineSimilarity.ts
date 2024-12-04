export const cosineSimilarity = <T extends { id: number }>(selectedItems: T[], allItems: T[]): { item: T, score: number }[] => {
  const selectedIds = selectedItems.map(item => item.id);

  const scores = allItems.map(item => {
    const itemIds = [item.id];
    const score = calculateCosineSimilarity(selectedIds, itemIds);
    return { item, score };
  });

  // Sort items by similarity score in descending order
  scores.sort((a, b) => b.score - a.score);

  return scores;
};

const calculateCosineSimilarity = (selectedIds: number[], itemIds: number[]): number => {
  const intersection = selectedIds.filter(id => itemIds.includes(id)).length;
  const magnitudeA = Math.sqrt(selectedIds.length);
  const magnitudeB = Math.sqrt(itemIds.length);

  if (magnitudeA === 0 || magnitudeB === 0) return 0;

  return intersection / (magnitudeA * magnitudeB);
};