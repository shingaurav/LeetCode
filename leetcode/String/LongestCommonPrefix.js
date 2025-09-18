
// Code


// Testcase
// Test Result
// Test Result
// 14. Longest Common Prefix
// Easy
// Topics
// premium lock icon
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//Link - https://leetcode.com/problems/longest-common-prefix/description/

var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
};

// Approach	Time Complexity	Space Complexity	Best For
// Vertical Scanning	O(N × M)	O(1)	Simple, efficient

// 2. Sort and Compare First & Last Strings

var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;

    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.slice(0, i);
};

// Sort + Compare
// O(S log N)
// O(log N)
// Short strings, early divergence