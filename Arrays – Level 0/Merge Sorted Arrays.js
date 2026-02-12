var merge = function(nums1, m, nums2, n) {

    // Loop starting from index m (where empty spaces start in nums1)
    // nums1 has extra space at the end to hold nums2 elements
    for (let i = m; i < nums1.length; i++) {

        // Copy elements from nums2 into nums1
        // (i - m) is used because nums2 starts from index 0
        nums1[i] = nums2[i - m];
    }

    // Sort the combined array in ascending order
    // Default sort converts numbers to strings, so comparator is needed
    nums1.sort((a, b) => a - b);
};
