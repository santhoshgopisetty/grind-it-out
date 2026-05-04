var circularArrayLoop = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (isCycle(nums, i)) {
            return true;
        }
    }
    return false;
};

function next(nums, i) {
    let n = nums.length;
    return ((i + nums[i]) % n + n) % n;
}

var isCycle = function (nums, idx) {
    let slow = idx, fast = idx;
    let n = nums.length;

    for (let count = 0; count < n; count++) {
        let slowNext = next(nums, slow);
        if (nums[slow] > 0 !== nums[slowNext] > 0) return false;
        slow = slowNext;

        let fastNext1 = next(nums, fast);
        if (nums[fast] > 0 !== nums[fastNext1] > 0) return false;
        let fastNext2 = next(nums, fastNext1);
        if (nums[fastNext1] > 0 !== nums[fastNext2] > 0) return false;
        fast = fastNext2;

        if (next(nums, slow) === slow) return false;

        if (slow === fast && count > 0) {
            return true;
        }
    }
    return false;
};