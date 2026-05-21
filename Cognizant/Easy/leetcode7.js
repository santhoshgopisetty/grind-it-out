var reverse = function (x) {
    let sign = 1;
    if (x < 0) {
        sign = -1;
        x = x * -1;
    }
    let res = 0;
    x = String(x);
    for (let i = x.length - 1; i >= 0; i--) {
        res = res * 10 + parseInt(x[i]);
    }
    return (res < Math.pow(2, 31) - 1 && res > - Math.pow(2, 31)) ? res * sign : 0;
};