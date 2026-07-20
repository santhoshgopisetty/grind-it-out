var shiftGrid = function (grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const total = m * n;
    k = k % total;

    const ans = Array.from({ length: m }, () => Array(n));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const oldIdx = i * n + j;
            const newIdx = (oldIdx + k) % total;
            const newRow = Math.floor(newIdx / n);
            const newCol = newIdx % n;

            ans[newRow][newCol] = grid[i][j];
        }
    }
    return ans;
};