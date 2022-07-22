// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) return [];

    const result = matrix.reduce((acc, item, index) => {
        if (index % 2 === 0) {
            return acc.concat(item);
        } else {
            return acc.concat(item.reverse());
        }
    }, []);

    return result;
};
