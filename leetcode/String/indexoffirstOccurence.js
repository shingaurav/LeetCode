
// Code
// Testcase
// Test Result
// Test Result
// 28. Find the Index of the First Occurrence in a String
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

var strStr = function(haystack, needle) {
    const hLen = haystack.length;
    const nLen = needle.length;
    
    if (nLen === 0) {
        return 0;
    }
    
    let i = 0;
    while (i < hLen) {
        let nIndex = 0;
        let j = i;
        
        while (j < hLen && nIndex < nLen && haystack[j] === needle[nIndex]) {
            j++;
            nIndex++;
        }
        
        if (nIndex === nLen) {
            return i;
        }
        
        i++;
    }
    
    return -1;
};
// ✅ Final Time Complexity:

// Worst Case Time Complexity: O(n * m)

// n = length of haystack

// m = length of needle

// 🧵 Space Complexity:

// O(1) – No additional space used beyond a few variables.