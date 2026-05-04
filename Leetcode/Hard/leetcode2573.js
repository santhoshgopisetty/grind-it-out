var findTheString = function (lcp) {
    const n = lcp.length;
    const word = new Array(n).fill('');

    let charCode = 97;
    for (let i = 0; i < n; i++) {
        if (word[i] !== '') continue;
        if (charCode > 122) return '';
        for (let j = i; j < n; j++) {
            if (lcp[i][j] > 0) word[j] = String.fromCharCode(charCode);
        }
        charCode++;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const expected = word[i] !== word[j] ? 0 : (i === n - 1 || j === n - 1) ? 1 : lcp[i + 1][j + 1] + 1;
            if (lcp[i][j] !== expected) return '';
        }
    }

    return word.join('');
};