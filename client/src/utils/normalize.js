export const normalizeString = (str) => {
    const sentence = str.trim();
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
};
