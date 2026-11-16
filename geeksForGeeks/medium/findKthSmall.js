class Solution {
    findKthSmall(arr, k) {
        // code here
        arr.sort((a, b) => a - b);

        for (let num of arr) {
            if (num <= k) {
                k++;
            }
            else {
                break;
            }
        }
        return k;
    }
}