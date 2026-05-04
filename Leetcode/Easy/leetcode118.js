var generate = function pascalTriangle(numRows) {
    if (numRows < 2) return [[1]];
    let result = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
        let row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(row);
    }
    return result;
}