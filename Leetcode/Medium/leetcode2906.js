var constructProductMatrix = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let res = Array.from({ length: m }, () => Array.from({ length: n }, () => 1));
    let mod = 12345;
    let prefix = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = prefix;
            prefix = (prefix * grid[i][j]) % mod;
        }
    }
    let suffix = 1;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            res[i][j] = (res[i][j] * suffix) % mod;
            suffix = (suffix * grid[i][j]) % mod;
        }
    }
    return res;
};