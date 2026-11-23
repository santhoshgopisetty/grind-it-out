let n;
let memo;

var maxSelectedElements = function (nums) {
    n = nums.length;
    memo = Array.from({ length: n + 1 }, () => [-1, -1]);
    nums.sort((a, b) => a - b);
    n = nums.length;
    let res = 1;

    for (let i = 0; i < n; i++) {
        res = Math.max(res, solve(i, 0, nums), solve(i, 1, nums));
    }

    return res;
};

const solve = function (i, inc, nums) {
    if (memo[i][inc] !== -1) {
        return memo[i][inc];
    }

    let currVal = nums[i] + inc; // inc = 0/1
    let len = 1;

    let j = findMethod(nums, i + 1, currVal + 1);

    if (j !== -1) {
        len = Math.max(len, 1 + solve(j, 0, nums));
    }

    j = findMethod(nums, i + 1, currVal);

    if (j !== -1) {
        len = Math.max(len, 1 + solve(j, 1, nums));
    }

    return memo[i][inc] = len;
}

const findMethod = function (nums, start, target) {
    let left = start;
    let right = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    let j = left;

    if (j < nums.length && nums[j] === target) {
        return j;
    }

    return -1;
}