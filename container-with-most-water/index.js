/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let l = 0;
    let r = heights.length - 1;
    let area = 0;
    while(l < r ){
        area = Math.max(area, Math.min(heights[l], heights[r]) * (r-l))
        if(heights[l] < heights[r]){
            l++;
        }else{
            r--
        }
    }
    return area;
};

/*
two pointer approach
find area at current left and right indecies by taking the smaller height * distance between two points
increment/decrement values closer to center of the smaller value
return area
*/
