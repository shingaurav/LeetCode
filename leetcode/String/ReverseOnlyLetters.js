// 917. Reverse Only Letters
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

 

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
//link - https://leetcode.com/problems/reverse-only-letters/description/

var reverseOnlyLetters = function(s){
    let chars = s.split('');
    let isLetter = (c) =>/[a-zA-Z]/.test(c);
    let left = 0 , right = chars.length - 1;
    while(left < right){
        if(!isLetter.chars[left]) left++;
        else if(!isLetter.chars[righ]) right--;
        else{
            [chars[left],chars[right]] = [chars[right],chars[left]];
            left++;
            right--;
        }
    }
    return chars.join('')
}
// Time: O(n)

// Space: O(n) (due to .split() array)