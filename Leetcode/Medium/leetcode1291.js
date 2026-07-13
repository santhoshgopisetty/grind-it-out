const sequentialDigits = function (low, high) {
    const res = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (const r of res) {
        const d = r % 10;
        if (d < 9) res.push(r * 10 + d + 1);
    }

    return res.filter(c => c >= low && c <= high);
}