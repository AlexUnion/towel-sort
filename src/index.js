module.exports = function towelSort (matrix = []) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result = result.concat(
            i % 2 === 0 ?
                matrix[i] :
                matrix[i].sort((a, b) => b - a)
        );
    }
    return result;
}
