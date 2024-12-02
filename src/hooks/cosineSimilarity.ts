import Platform from '../entities/Platform';

export const cosineSimilarity = (selectedPlatforms: Platform[], allPlatforms: Platform[]): { platform: Platform, score: number }[] => {
    const selectedIds = selectedPlatforms.map(platform => platform.id);

    const scores = allPlatforms.map(platform => {
        const platformIds = [platform.id];
        const score = calculateCosineSimilarity(selectedIds, platformIds);
        return { platform, score };
    });

    // Sort platforms by similarity score in descending order
    scores.sort((a, b) => b.score - a.score);

    return scores;
};

const calculateCosineSimilarity = (selectedIds: number[], platformIds: number[]): number => {
    const intersection = selectedIds.filter(id => platformIds.includes(id)).length;
    const magnitudeA = Math.sqrt(selectedIds.length);
    const magnitudeB = Math.sqrt(platformIds.length);

    if (magnitudeA === 0 || magnitudeB === 0) return 0;

    return intersection / (magnitudeA * magnitudeB);
};