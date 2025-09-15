// 242. Valid Anagram
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

var isAnagram = function(s,t){
    if(s.length !== t.length) return false;
    let count = {};
    for(let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for(let char of t){
        if(!count[char]) return false;
        count[char]--;
    }
    return true;
}

// 🧮 Total Time Complexity:

// Since both loops are linear and run separately:

// O(n) + O(n) = O(n)


// ✅ Final Time Complexity: O(n)
// 📦 Space Complexity (Bonus)

// You’re using a count object to store frequencies of characters in s.

// In the worst case, all characters in s are unique → space used is proportional to the number of distinct characters.

// So space complexity is:
// ✅ O(1) if you assume only lowercase letters (fixed 26 chars)
// ✅ O(k) if k is the number of unique characters in s