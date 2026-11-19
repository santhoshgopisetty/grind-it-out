var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let idx = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[idx--] = nums1[i--];
        } else {
            nums1[idx--] = nums2[j--];
        }
    }

    while (j >= 0) {
        nums1[idx--] = nums2[j--];
    }

    // let i = 0;
    // let j = 0;
    // let idx = 0;
    // const arr = [];
    // while (i < m && j < n) {
    //     if (nums1[i] <= nums2[j]) {
    //         arr[idx++] = nums1[i++];
    //     }
    //     else {
    //         arr[idx++] = nums2[j++];
    //     }
    // }

    // while (i < m) {
    //     arr[idx++] = nums1[i++];
    // }

    // while (j < n) {
    //     arr[idx++] = nums2[j++];
    // }

    // for (let i = 0; i < m + n; i++) {
    //     nums1[i] = arr[i];
    // }
};