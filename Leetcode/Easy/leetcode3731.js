var findMissingElements = function (nums) {
    let largest = nums[0];
    let smallest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        largest = Math.max(nums[i], largest);
        smallest = Math.min(nums[i], smallest);

    }
    let visited = [];
    for (let ele of nums) {
        visited[ele] = 1;
    }
    let result = [];
    for (let i = smallest; i <= largest; i++) {
        if (!visited[i]) {
            result.push(i);
        }
    }

    return result;
};