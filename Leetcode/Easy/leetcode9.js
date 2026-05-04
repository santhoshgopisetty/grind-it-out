var isPalindrome = function (x) {
    if (x < 0) { return false; }
    let n = x;
    let rev = 0;
    while (x !== 0) {
        let rem = x % 10;
        rev = rev * 10 + rem;
        x = Math.trunc(x / 10);
    }
    return n === rev;
};