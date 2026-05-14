var isGood = function (nums) {
    const n = nums.length - 1;
    const seen = new Set();
    let dup = false;

    for (const num of nums) {
        if (num > n) return false;

        if (seen.has(num)) {
            if (num < n || dup) return false;
            dup = true;
            continue;
        }

        seen.add(num);
    }

    return true;
};