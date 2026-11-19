var removeDuplicates = function (nums) {
    let idx = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let count = 1;
        while (i < n && nums[i] === nums[i + 1]) {
            i++;
            count++;
        }

        if (count >= 2) {
            nums[idx] = nums[i];
            nums[idx + 1] = nums[i];
            idx += 2;
        } else {
            nums[idx++] = nums[i]
        }
    }

    return idx;
};