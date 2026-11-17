class Solution {
    findPattern(s) {
        // code here
        if (s.length === 0) { return true; }
        let i = 0;
        while (i < s.length) {
            let x = 0;
            let y = 0;
            while (i < s.length && s[i] === "x") {
                x++;
                i++;
            }
            while (i < s.length && s[i] === "y") {
                y++;
                i++;
            }
            if (x === 0 || x !== y) { return false; }
        }

        return true;
    }
}