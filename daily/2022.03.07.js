//最大子数组和

/**
 * @param {number[]} nums
 * @return {number}
 */

//贪心算法

var maxSubArray = function(nums) {
    let pre = 0,
        maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};