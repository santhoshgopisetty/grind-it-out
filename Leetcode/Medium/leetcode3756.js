var sumAndMultiply = function (s, queries) {
    const MOD = 1000000007n;
    const n = s.length;

    const digitSum = new Array(n + 1).fill(0);
    const nzCount = new Array(n + 1).fill(0);
    const runningX = new Array(n + 1).fill(0n);

    const pow10 = new Array(n + 1).fill(1n);
    for (let i = 1; i <= n; i++) {
        pow10[i] = (pow10[i - 1] * 10n) % MOD;
    }

    for (let i = 0; i < n; i++) {
        const d = s.charCodeAt(i) - 48;

        digitSum[i + 1] = digitSum[i] + d;

        if (d !== 0) {
            nzCount[i + 1] = nzCount[i] + 1;
            runningX[i + 1] = (runningX[i] * 10n + BigInt(d)) % MOD;
        } else {
            nzCount[i + 1] = nzCount[i];
            runningX[i + 1] = runningX[i];
        }
    }

    const ans = new Array(queries.length);

    for (let q = 0; q < queries.length; q++) {
        const l = queries[q][0];
        const r = queries[q][1];

        const sum = digitSum[r + 1] - digitSum[l];

        const k = nzCount[r + 1] - nzCount[l];

        let x = (runningX[r + 1] - runningX[l] * pow10[k]) % MOD;
        x = ((x % MOD) + MOD) % MOD;

        const result = (x * BigInt(sum)) % MOD;
        ans[q] = Number(result);
    }

    return ans;
};