var areSimilar = function (mat, k) {
    const m = mat.length;
    const n = mat[0].length;
    const effectiveShift = k % n;
    if (effectiveShift === 0) return true;
    for (let i = 0; i < m; i++) {
        const row = mat[i];
        let shifted;
        if (i % 2 === 0) {
            shifted = [...row.slice(effectiveShift), ...row.slice(0, effectiveShift)];
        } else {
            shifted = [...row.slice(n - effectiveShift), ...row.slice(0, n - effectiveShift)];
        }
        for (let j = 0; j < n; j++) {
            if (shifted[j] !== row[j]) return false;
        }
    }

    return true;
};