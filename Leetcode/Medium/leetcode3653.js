var xorAfterQueries = function (nums, queries) {
    const MOD = 1e9 + 7;

    // Process each query one by one
    for (const [l, r, k, v] of queries) {
        // Walk from l to r, stepping by k each time
        for (let idx = l; idx <= r; idx += k) {
            nums[idx] = (nums[idx] * v) % MOD;
        }
    }

    // XOR all elements together
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }

    return result;
};