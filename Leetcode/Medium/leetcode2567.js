var minimizeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let n = nums.length;

    let case1 = nums[n - 2] - nums[1];
    let case2 = nums[n - 1] - nums[2];
    let case3 = nums[n - 3] - nums[0];

    console.log(case1, case2, case3);

    return Math.min(case1, case2, case3);
};