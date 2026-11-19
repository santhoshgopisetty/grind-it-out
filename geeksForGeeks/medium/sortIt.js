class Solution {
    sortIt(arr) {
        // code here
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 1) { arr[i] *= -1; }
        }

        arr.sort((a, b) => a - b);

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === -1) { arr[i] *= -1; }
        }
    }
}
