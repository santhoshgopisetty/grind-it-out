var isHappy = function (n) {
    let seen = new Set();
    while (n !== 1) {
        if (seen.has(n)) return false;
        seen.add(n);
        n = happy(n)
    }
    return true;
};

var happy = function (num) {
    num += "";
    let res = 0;
    for (let i = 0; i < num.length; i++) {
        res += Math.pow(parseInt(num[i]), 2);
    }
    return res;
}