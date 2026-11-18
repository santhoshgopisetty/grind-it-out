class Solution {
    findXOR(l, r) {
        return this.xor(r) ^ this.xor(l - 1);
    }

    xor(n) {
        if (n % 4 === 0) return n;
        if (n % 4 === 1) return 1;
        if (n % 4 === 2) return n + 1;
        return 0;
    }
}