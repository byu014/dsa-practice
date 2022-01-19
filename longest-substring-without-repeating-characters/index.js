/*
  Given a string s, find the length of the longest substring without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let curI = 0;
    let setChars = new Set();
    for(let i = 0; i < s.length; i++){
        while(setChars.has(s[i])){
            setChars.delete(s[curI]);
            curI += 1;
        }
        setChars.add(s[i])
        max = Math.max(max, i - curI + 1);

    }
    return max;
};

/*
use sliding window method
for loop traverse through each character of s
while the current character is in setChars, delete character of curI from setChars and increment curI
add current char at i to set
assign max of current max value or substring length from curI to i
return max at end of for loop
