var canPartitionGrid = function (grid) {
    let m = grid.length, n = grid[0].length;

    let total = 0;
    for (let row of grid) {
        for (let val of row) total += val;
    }

    let topMap = new Map();
    let bottomMap = new Map();

    for (let row of grid) {
        for (let val of row) {
            bottomMap.set(val, (bottomMap.get(val) || 0) + 1);
        }
    }

    let topSum = 0;

    for (let i = 0; i < m - 1; i++) {
        for (let val of grid[i]) {
            topSum += val;
            topMap.set(val, (topMap.get(val) || 0) + 1);
            bottomMap.set(val, bottomMap.get(val) - 1);
            if (bottomMap.get(val) === 0) bottomMap.delete(val);
        }

        let bottomSum = total - topSum;

        if (topSum === bottomSum) return true;

        let diff = Math.abs(topSum - bottomSum);

        if (topSum > bottomSum) {
            if (topMap.has(diff)) {
                if (i + 1 > 1 && n > 1) return true;
                if (i + 1 === 1) {
                    let row = grid[0];
                    if (row[0] === diff || row[n - 1] === diff) return true;
                }
                if (n === 1) {
                    if (grid[0][0] === diff || grid[i][0] === diff) return true;
                }
            }
        } else {
            if (bottomMap.has(diff)) {
                if (m - i - 1 > 1 && n > 1) return true;
                if (m - i - 1 === 1) {
                    let row = grid[i + 1];
                    if (row[0] === diff || row[n - 1] === diff) return true;
                }
                if (n === 1) {
                    if (grid[i + 1][0] === diff || grid[m - 1][0] === diff) return true;
                }
            }
        }
    }

    let leftMap = new Map();
    let rightMap = new Map();

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            let val = grid[i][j];
            rightMap.set(val, (rightMap.get(val) || 0) + 1);
        }
    }

    let leftSum = 0;

    for (let j = 0; j < n - 1; j++) {
        for (let i = 0; i < m; i++) {
            let val = grid[i][j];
            leftSum += val;
            leftMap.set(val, (leftMap.get(val) || 0) + 1);
            rightMap.set(val, rightMap.get(val) - 1);
            if (rightMap.get(val) === 0) rightMap.delete(val);
        }

        let rightSum = total - leftSum;

        if (leftSum === rightSum) return true;

        let diff = Math.abs(leftSum - rightSum);

        if (leftSum > rightSum) {
            if (leftMap.has(diff)) {
                if (m > 1 && j + 1 > 1) return true;
                if (j + 1 === 1) {
                    if (grid[0][0] === diff || grid[m - 1][0] === diff) return true;
                }
                if (m === 1) {
                    let row = grid[0];
                    if (row[0] === diff || row[j] === diff) return true;
                }
            }
        } else {
            if (rightMap.has(diff)) {
                if (m > 1 && n - j - 1 > 1) return true;
                if (n - j - 1 === 1) {
                    if (grid[0][j + 1] === diff || grid[m - 1][j + 1] === diff) return true;
                }
                if (m === 1) {
                    let row = grid[0];
                    if (row[j + 1] === diff || row[n - 1] === diff) return true;
                }
            }
        }
    }

    return false;
};