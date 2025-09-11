// 345. Reverse Vowels of a String
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"
//link - https://leetcode.com/problems/reverse-vowels-of-a-string/description/

var reverseVowels = function(s){
    var vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let temp = s.split('');
    let vowelArr = [];

    for(let char of temp){
        if(vowels.includes(char)){
            vowelArr.push(char)
        }
    }

    for(let i = 0 ; i < temp.length; i++){
        if(vowels.includes(temp[i])){
            temp[i] = vowelArr.pop()
        }
    }
    return temp.join()
}

// Time Complexity	O(n)
// Space Complexity	O(n)

// 2nd solution

var reverseVowels = function(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let temp = s.split(''); 
    let left = 0 , right = s.length - 1;
 
    while(left < right){
     while(left < right && !vowels.has(temp[left])) left++;
     while(left < right && !vowels.has(temp[right])) right--;
 
  [temp[left], temp[right]] = [temp[right], temp[left]];
  left++
  right--;
    }
    return temp.join('');
 
 }
