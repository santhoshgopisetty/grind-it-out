var numberOfSubmatrices = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let result = 0;
    let xPrefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    let yPrefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            xPrefix[i][j] = (grid[i - 1][j - 1] === 'X' ? 1 : 0)
                + xPrefix[i - 1][j]
                + xPrefix[i][j - 1]
                - xPrefix[i - 1][j - 1];

            yPrefix[i][j] = (grid[i - 1][j - 1] === 'Y' ? 1 : 0)
                + yPrefix[i - 1][j]
                + yPrefix[i][j - 1]
                - yPrefix[i - 1][j - 1];
        }
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let x = xPrefix[i][j];
            let y = yPrefix[i][j];
            if (x > 0 && x === y) result++;
        }
    }
    return result;
};