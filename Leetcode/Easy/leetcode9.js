var isPalindrome = function (x) {
    x = x + "";
    let n = x.length;
    for (let i = 0; i < n; i++) {
        if (x[i] !== x[n - i - 1]) return false;
    }
    return true;
};