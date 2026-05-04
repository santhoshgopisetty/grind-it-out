var findRotation = function (mat, target) {
    const n = mat.length;
    function isEqual(a, b) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (a[i][j] !== b[i][j]) return false;
            }
        }
        return true;
    }
    function rotate(matrix) {
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
        for (let i = 0; i < n; i++) {
            matrix[i].reverse();
        }
    }
    for (let k = 0; k < 4; k++) {
        if (isEqual(mat, target)) return true;
        rotate(mat);
    }
    return false;
};