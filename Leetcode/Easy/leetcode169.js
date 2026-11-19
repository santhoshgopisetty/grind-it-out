var majorityElement = function (nums) {
    let count = 0;
    let element = 0;
    for (let num of nums) {
        if (count === 0) element = num;
        if (element === num) count++
        else count--;
    }
    return element;
};