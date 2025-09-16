
// Code
// Accepted
// Accepted
// Testcase
// Testcase
// Test Result
// 387. First Unique Character in a String
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

var firstUniqChar = function(s){
     s = s.split('');
     let count ={};
     for(let char of s){
        count[char] = (count[char] || 0 ) + 1;
     }
     for(let i = 0 ; i < s.length ; i++){
        if(count[s[i]] === 1) {
            return i;
        }
     }
     return -1;
}


// Time Complexity	O(n)
// Space Complexity	O(k) (or O(1) for small fixed alphabets)