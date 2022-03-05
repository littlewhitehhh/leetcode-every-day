/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let slow = 0,
        fast = 0;
    let n = nums.length;
    if (target > nums[n - 1]) {
        return n;
    } else if (target <= nums[fast]) {
        return fast;
    }
    while (fast <= n) {
        if (target === nums[fast]) {
            return fast;
        } else if (target > nums[slow] && target < nums[fast]) {
            return fast;
        } else {
            slow = fast;
            fast++;
        }
    }
};

//二分查找
var searchInsert2 = function(nums, target) {
    const n = nums.length;
    let left = 0,
        right = n - 1,
        ans = n;
    while (left <= right) {
        // let mid = ((right - left) >> 1) + left;
        let mid = Math.floor((right - left) / 2) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};

let res = searchInsert2([1, 2, 3, 8], 9);
console.log(res);