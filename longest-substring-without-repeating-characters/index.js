/*
  Given a string s, find the length of the longest substring without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let setChars = new Set();
    let curI = i;
    while (!setChars.has(s[curI]) && curI < s.length) {
      setChars.add(s[curI]);
      max = Math.max(max, setChars.size);
      curI++;
    }
  }
  return max;
};
