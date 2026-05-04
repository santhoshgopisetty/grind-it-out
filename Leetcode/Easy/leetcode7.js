var reverse = function (x) {
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    let rev = 0;
    while (x !== 0) {
        let digit = x % 10;
        rev = rev * 10 + digit;
        if (rev > 2147483647) return 0;
        x = Math.trunc(x / 10);
    }
    return sign * rev;
};