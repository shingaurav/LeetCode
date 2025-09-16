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


//brute force

var isAnagram = function(s, t) {
    s = s.split('').sort();
    t = t.split('').sort();
    if(s.length !== t.length) return false;
   for(let i = 0 ; i < s.length ; i++ ){
       if(s[i] !== t[i]) return false
   }
   return true;
};





// ✅ Total Time Complexity:
// O(n)  // splitting
// + O(n log n)  // sorting
// + O(n)  // comparing
// = O(n log n)


// ✅ Final Time Complexity: O(n log n)

// 2. sort() is typically in-place

// JavaScript .sort() is usually done in-place, but it can require additional space in the underlying implementation (depends on the browser).

// For the purpose of analysis, we treat it as O(1) auxiliary space, but the arrays themselves are still O(n).

// ✅ Final Space Complexity: O(n)