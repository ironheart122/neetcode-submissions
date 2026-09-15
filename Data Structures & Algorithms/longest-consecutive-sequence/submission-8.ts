class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    const numsSet = new Set(nums);
    let longest = 0;

    for (const num of numsSet) {
      // Only begin walking from the start of a sequence.
      if (!numsSet.has(num - 1)) {
        let current = num;
        let length = 1;

        while (numsSet.has(current + 1)) {
          current++;
          length++;
        }

        longest = Math.max(longest, length);
      }
    }

    return longest;
  }
}

/**
Build Set:     O(n)
Scan Set:      O(n)
Sequence walk: O(n) total across all chains
------------------------------------------
Time:          O(n) expected
Space:         O(n)
 */