// 557. Reverse Words in a String III
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
//link - https://leetcode.com/problems/reverse-words-in-a-string-iii/

var reverseWords =  function(s){
    let temp = s.split(' ')
    let reverse = []
    for(let i = 0 ; i < temp.length; i--){
        reverse.push(temp[i].split('').reverse().join(''))
    }
  return reverse.join('')
}
reverseWords("Let's take LeetCode contest")

//another solution
var reverseWords = function(s){
    let result = '';
    let word = '';
    for(let i = 0 ; i < s.length; i++){
       const char = s[i];
       if(char !== ' '){
          word = char + word // this all add new char always at the front
       }else{
          result += word + ' ';
          word = ''
       }
    }
    result += word;
    return result;
  }