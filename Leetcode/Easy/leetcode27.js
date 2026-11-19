var removeElement = function (nums, val) {
    let i = 0;
    let n = nums.length;
    let j = n - 1;
    let res = 0;

    while (i <= j) {
        while (j >= 0 && nums[j] === val) {
            j--;
            res++;
        }

        if (i <= j && nums[i] === val) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j--;
            res++;
        }
        i++;
    }

    return n - res;
};