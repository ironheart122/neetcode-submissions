class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
      // We will use a 2 pass loop solution for this.

      // The first pass is to calculate the prefix of nums[i] by multipying everything strictly
      // to the left of the nums[i]
      let prefix = 1;
      const result = new Array<number>(nums.length)
      
      // O(n)
      for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i] // absorb nums[i] for the next iteration
      }

      let suffix = 1;
      // suffix pass (backwards). suffix is calculated by multiplying everything to the right of nums[i]. For each iteration, multiply the result by suffix and then absorb nums[i] for the next one)
      // O(n)
      for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i]
      }

      // Note that I immediately realized that the suffix pass should run backwards. I had it setup to be forward by mistake. Maybe i was in a hurry. Jeez.
      return result;
    }
}
