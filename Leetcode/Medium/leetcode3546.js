var canPartitionGrid = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    const total = grid.flat().reduce((sum, val) => sum + val, 0);
    let sum = 0;
    for (let i = 0; i < m; i++) {
        sum += grid[i].reduce((s, val) => s + val, 0);
        if (sum * 2 === total) { return true; }
    }
    sum = 0;
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            sum += grid[i][j];
        }
        if (sum * 2 === total) { return true; }
    }
    return false;
};