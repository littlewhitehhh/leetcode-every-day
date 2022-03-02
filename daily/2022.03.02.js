//两数之和

/**
 * @param nums: number[]  数组
 * @param target:number 目标值
 * @return number[]
 */

//双循环
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const a = target - nums[i];
        console.log(a);
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === a) {
                return [i, j];
            }
            // console.log(nums[j]);
        }
    }
};

var twoSum2 = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }

    return [];
};

let res = twoSum([2, 7, 11, 15], 9);
console.log(res);