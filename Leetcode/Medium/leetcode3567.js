var minAbsDiff = function (grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    let rows = m - k + 1;
    let cols = n - k + 1;
    let ans = [];
    for (let i = 0; i < rows; i++) {
        const rowAns = [];
        for (let j = 0; j < cols; j++) {
            const vals = new Set();
            for (let r = i; r < i + k; r++) {
                for (let c = j; c < j + k; c++) {
                    vals.add(grid[r][c]);
                }
            }
            const sorted = [...vals].sort((a, b) => a - b);
            if (sorted.length === 1) {
                rowAns.push(0);
            } else {
                let minDiff = Infinity;
                for (let idx = 1; idx < sorted.length; idx++) {
                    minDiff = Math.min(minDiff, sorted[idx] - sorted[idx - 1]);
                }
                rowAns.push(minDiff);
            }
        }
        ans.push(rowAns);
    }
    return ans;
};