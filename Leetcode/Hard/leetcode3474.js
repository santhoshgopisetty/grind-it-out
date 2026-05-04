var generateString = function (str1, str2) {
    let n = str1.length;
    let m = str2.length;
    let res = new Array(n + m - 1).fill("a");
    let locked = new Array(n + m - 1).fill(false);
    for (let i = 0; i < n; i++) {
        if (str1[i] === "T") {
            for (let j = 0; j < m; j++) {
                if (locked[i + j] && res[i + j] !== str2[j]) return "";
                res[i + j] = str2[j];
                locked[i + j] = true;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (str1[i] === "F") {
            let matches = true;
            for (let j = 0; j < m; j++) {
                if (res[i + j] !== str2[j]) { matches = false; break; }
            }
            if (matches) {
                let changed = false;
                for (let j = m - 1; j >= 0; j--) {
                    if (!locked[i + j]) {
                        const next = String.fromCharCode(str2.charCodeAt(j) + 1);
                        if (next <= 'z') {
                            res[i + j] = next;
                            changed = true;
                            break;
                        }
                    }
                }
                if (!changed) return "";
            }
        }
    }
    for (let i = 0; i < n; i++) {
        const window = res.slice(i, i + m).join('');
        if (str1[i] === 'T' && window !== str2) return "";
        if (str1[i] === 'F' && window === str2) return "";
    }
    return res.join("");
};