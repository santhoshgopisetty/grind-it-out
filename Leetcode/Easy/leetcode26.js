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


var removeDuplicates = function (nums) {
    let n = nums.length;
    let idx = 0;

    for (let i = 0; i < n; i++) {
        while (i < n - 1 && nums[i] === nums[i + 1]) {
            i++;
        }
        nums[idx++] = nums[i];
    }

    return idx;
};