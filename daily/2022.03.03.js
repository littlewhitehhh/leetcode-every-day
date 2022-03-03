//删除有序列表重复元素

var removeDuplicates = function(nums) {
    let newNums = [];
    for (let i = 0; i < nums.length; i++) {
        if (newNums.indexOf(nums[i]) === -1) {
            newNums.push(nums[i]);
        }
    }
    return newNums;
};

const res = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(res);
console.log(res.length);

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {
    let fast = 1,
        slow = 1;
    while (fast < nums.length) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            ++slow;
        }

        fast++;
    }
    return slow;
};