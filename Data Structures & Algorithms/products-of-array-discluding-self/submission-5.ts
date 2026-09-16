class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    const result = Array<number>(nums.length)

    let prefix = 1;

    // first pass
    for (let i = 0; i < nums.length; i++) {
      // prefix is the product of everything strictly to the left of i
      result[i] = prefix
      // Update prefix by multiplying it by the current i of nums for hte next iteration
      prefix *= nums[i]
    }

    let suffix = 1
    // second pass
    for (let j = nums.length - 1; j >= 0; j--) {
      result[j] = result[j] * suffix
      suffix *= nums[j] // update suffix by multipling it by the current j of nums for the next iteration
    }

    return result;
  }
}
