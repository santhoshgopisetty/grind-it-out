var removeDuplicates = function (nums) {
    let n = nums.length;
    let j = 1;
    for (let i = 1; i < n; i++) {
        while (i < n && nums[i - 1] === nums[i]) {
            i++;
        }
        if (i < n) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};