var minimumDistance = function (nums) {
    let n = nums.length;
    let ans = Infinity;
    if (n <= 2) { return -1; }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[j] === nums[i]) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[k] === nums[j]) {
                        ans = Math.min(ans, 2 * (k - i));
                    }
                }
            }
        }
    }
    return ans === Infinity ? -1 : ans;
};