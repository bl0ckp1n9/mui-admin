export const getNumberOfPage = (
    toalOfItems: number,
    itemsCountOfPerPage: number
): number => {
    return Math.ceil(toalOfItems / itemsCountOfPerPage);
};
