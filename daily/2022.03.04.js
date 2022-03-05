//移除元素
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// splice解法
var removeElement = function(nums, val) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};

//双指针
var removeElement2 = function(nums, val) {
    const n = nums.length;
    let left = 0;
    for (let right = 0; right < n; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};

//双指针优化   交换移除
var removeElement = function(nums, val) {
    let left = 0,
        right = nums.length;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};