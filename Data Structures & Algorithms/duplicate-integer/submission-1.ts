// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]): boolean {
    // if nums doesnt contain duplicates then its length will always be equal to the length of the set of distinct elements derived from nums

    return nums.length !== [...new Set(nums)].length
  }
}
