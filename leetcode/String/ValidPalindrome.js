// 125. Valid Palindrome
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Link - https://leetcode.com/problems/valid-palindrome/description/

var isPalindrome = function(s){
    let cleaned = s.replace(/'a-zA-Z'/,'').toLowerCase();
    let reverse = cleaned.split('').reverse().join('');
    return cleaned === reverse;
}

// Time Complexity: O(n)

// Space Complexity: O(n) → for cleaned, and again for reverse string.

var palindrome  = function(s){
    let left = 0 , right = s.length - 1;
    while(left < right){
        while(left < right && !isPal(s[left])) left++;
        while(left < right && !isPal(s[right])) right --;
        if(s[left].toLowerCase() === s[right].toLowerCase()){
            return false
        }
    }
    return true;

}
function isPal(c){
    return /^[a-z0-9]$/i.test(c);

}