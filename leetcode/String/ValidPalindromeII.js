// 680. Valid Palindrome II
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
//Link - https://leetcode.com/problems/valid-palindrome-ii/description/

var validPalindrome = function(s){
    let left = 0 , right = s.length - 1;
    while(left < right){
        if(s[left] !== s[right]){
            return isPal(s , left+1 , right) || isPal(s, left, right-1);
        }
        left++;
        right--;
    }
   return true;
}

function isPal(s, left , right){
    while(left < right){
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}