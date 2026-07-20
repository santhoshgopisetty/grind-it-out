function isNum(ch) {
    return ch >= "0" && ch <= "9";
}

var myAtoi = function (s) {
    let i = 0;
    let sign = 1;
    let res = 0;

    while (i < s.length && s[i] === " ") {
        i++;
    }

    if (i < s.length && (s[i] === "-" || s[i] === "+")) {
        if (s[i] === "-") {
            sign = -1;
        }
        i++;
    }

    while (i < s.length && isNum(s[i])) {
        res = res * 10 + Number(s[i]);
        i++;
    }

    res *= sign;

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (res > INT_MAX) return INT_MAX;
    if (res < INT_MIN) return INT_MIN;

    return res;
};