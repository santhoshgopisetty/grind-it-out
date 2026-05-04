var checkStrings = function (s1, s2) {
    if (s1.length !== s2.length) return false;
    let even1 = [];
    let even2 = [];
    let odd1 = [];
    let odd2 = [];
    for (let i = 0; i < s1.length; i++) {
        if (i % 2 === 0) {
            even1.push(s1[i]);
            even2.push(s2[i]);
        }
        else {
            odd1.push(s1[i]);
            odd2.push(s2[i]);
        }
    }
    return even1.sort().join('') === even2.sort().join('') && odd1.sort().join('') === odd2.sort().join('');
};