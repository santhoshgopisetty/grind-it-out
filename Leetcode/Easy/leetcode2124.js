var checkString = function (s) {
    let a = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] === "a") { a++; }
    }

    if (a === 0) return true;

    for (let i = 0; i < n; i++) {
        if (s[i] === "a") {
            a--;
        }
        else {
            if (a > 0) return false
        }
    }

    return true;
};