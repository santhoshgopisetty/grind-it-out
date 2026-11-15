var numOfSubarrays = function (arr) {
    // let n = arr.length;
    // let prefix = new Array(n+1).fill(0);
    // let result = 0;

    // for (let i = 0; i < n; i++) {
    //     prefix[i+1] = prefix[i] + arr[i];
    // }

    // for (let len = 1; len <= n; len++) {
    //     for (let i = 0; i + len <= n; i++) {
    //         let sum = prefix[i+len] - prefix[i];
    //         result = sum % 2 === 1 ? result + 1 : result;
    //     }
    // }
    // return result;

    let n = arr.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            result = sum % 2 === 1 ? result + 1 : result;
        }
    }

    return result % (Math.pow(10, 9) + 7);
};