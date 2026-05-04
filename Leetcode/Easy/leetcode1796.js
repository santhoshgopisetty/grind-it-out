var secondHighest = function (s) {
    s = s.split("");
    s = s.filter((char) => {
        return char >= "0" && char <= "9";
    });
    max = parseInt(s[0]);
    secMax = -1;
    for (let i = 0; i < s.length; i++) {
        let num = parseInt(s[i]);
        if (num > max) {
            secMax = max;
            max = num;
        }
        else if (num < max && secMax < num) {
            secMax = num;
        }
    }
    return secMax;
};