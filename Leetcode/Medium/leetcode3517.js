var smallestPalindrome = function (s) {
    const freq = {};
    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let left = "";
    let right = "";
    let middle = "";

    let chars = Object.keys(freq).sort();

    for (const ch of chars) {
        left += ch.repeat(Math.floor(freq[ch] / 2));
        if (freq[ch] % 2 === 1) {
            middle = ch;
        }
    }

    right = left.split("").reverse().join("");

    return left + middle + right;
};