var rotate = function (nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [nums[i][j], nums[j][i]] = [nums[j][i], nums[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        let left = 0, right = n - 1;
        while (left < right) {
            [nums[i][left], nums[i][right]] = [nums[i][right], nums[i][left]];
            left++;
            right--;
        }
    }
};