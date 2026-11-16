var digitSum = function (s, k) {
    let res = s;

    while (res.length > k) {
        res = generateSum(res, k);
    }

    return res;
};

var generateSum = function (s, k) {
    let res = "";
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        sum += Number(s[i]);
        if ((i + 1) % k === 0) {
            res += sum;
            sum = 0;
        }
    }

    if (s.length % k != 0) {
        res += sum;
    }

    return res;
}