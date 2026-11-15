var minimumSumSubarray = function (nums, l, r) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    let best = Infinity;

    for (let len = l; len <= r; len++) {
        for (let i = 0; i + len <= n; i++) {

            let sum = prefix[i + len] - prefix[i];

            if (sum > 0 && sum < best) {
                best = sum;
            }
        }
    }

    return best === Infinity ? -1 : best;
};