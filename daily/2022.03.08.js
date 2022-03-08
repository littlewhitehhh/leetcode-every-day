// 加一
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0) return digits;
    }
    digits = [...Array(len + 1)].map((_) => 0); // 走到这  ==>  99 + 1 =100  创建一个len + 1的全是0的数组
    digits[0] = 1;
    return digits;
};

let res = plusOne([1, 2, 3]);
console.log(res);