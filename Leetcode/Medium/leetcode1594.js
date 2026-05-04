var maxProductPath = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    const MOD = 1e9 + 7;
    let dpMax = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
    let dpMin = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
    dpMax[0][0] = dpMin[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) {
        dpMax[i][0] = dpMin[i][0] = dpMax[i - 1][0] * grid[i][0];
    }
    for (let j = 1; j < n; j++) {
        dpMax[0][j] = dpMin[0][j] = dpMax[0][j - 1] * grid[0][j];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let val = grid[i][j];
            let val1 = dpMax[i - 1][j] * val;
            let val2 = dpMin[i - 1][j] * val;
            let val3 = dpMax[i][j - 1] * val;
            let val4 = dpMin[i][j - 1] * val;
            dpMax[i][j] = Math.max(val1, val2, val3, val4);
            dpMin[i][j] = Math.min(val1, val2, val3, val4);
        }
    }
    return (dpMax[m - 1][n - 1] >= 0) ? dpMax[m - 1][n - 1] % MOD : -1;
};