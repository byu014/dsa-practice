/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function (nums, target) {
  const numToIndex = {};

  for (let i = 0; i < nums.length; i++) {
    numToIndex[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const numNeeded = target - nums[i];
    if (numToIndex[numNeeded] !== undefined && numToIndex[numNeeded] !== i) {
      return [i, numToIndex[numNeeded]];
    }
  }
};

/* explaination
first for loop find the number that when added to each index of nums produces target
map each number of nums to its respective index to produce O(1) lookup time

second for loop check if the number needed at each index of nums exists in the nums array
if it does check if the index of that num does not equal the current index
return current index and index of the required num
*/
