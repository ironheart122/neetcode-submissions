class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    const result = new Array<number>(nums.length);

    // prefix pass
    // before processing index i, prefix (running product) is the product of all elements strictly to the left of i.
    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    // suffix pass
    // while moving right to left, suffix (running product) represents the product of all elements strictly to the right of the current index
    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i]
    }

    return result;
  }
}
