class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    const set = new Set<number>(nums);
    let longest = 0

    for (const num of set) {
      if (!set.has(num - 1)) {
        let current = num
        let length = 1

        while (set.has(current + 1)) {
          current++
          length++
        }

        longest = Math.max(length, longest)
      }
    }

    return longest;
  }
}
