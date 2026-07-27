var maxProduct = function (nums) {
    nums.sort((a, b) => a - b);

    return (nums[nums.length - 1] - 1) *
        (nums[nums.length - 2] - 1);
};

var maxProduct = function (nums) {
    let first = 0;
    let second = 0;

    for (const num of nums) {
        if (num >= first) {
            second = first;
            first = num;
        }

        else if (num > second) {
            second = num;
        }
    }

    return (first - 1) * (second - 1);
};