// 1662. Check If Two String Arrays are Equivalent
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

 

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

//Link - https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

var arrayStringsAreEqual = function(word1 , word2){
    let left = '';
    let right = '';
    for(let char of word1){
        left += char;
    }
    for(let char of word2){
        right += char;
    }
    if(left === right){
        return true;
    }else{
        return false;
    }
}


// Time Complexity	O(N + M)
// Space Complexity	O(N + M)