var sumAndMultiply = function (n) {
    let x = 0;
    let sum = 0;
    let i = 1;
    while (n > 0) {
        if (n % 10 != 0) {
            sum += n % 10;
            x += n % 10 * i;
            i *= 10;
        }
        n = Math.floor(n / 10);
    }
    return x * sum;
};