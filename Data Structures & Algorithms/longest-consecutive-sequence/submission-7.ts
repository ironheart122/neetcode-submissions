class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    // 2nd attempt (with assistance) - 34/34 test cases passed!! WOOHOOO.

    let length: number = 0;

    // Store all the distinct numbers in the set so we kno what we have on hand when processing nums[i] later
    // Space = O(n)
    // Time = O(n)
    const distinctNumsSet = new Set(nums);
    let longest = 0;

    for (const num of distinctNumsSet) {
      // Check if the current num is the beginning of a chain
      if (!distinctNumsSet.has(num - 1)) {
        let current = num;
        length = 1;

        // Keep traversing through the set while theres the next number available in the set
        while (distinctNumsSet.has(current + 1)) {
          // if Found, increment the length and then advance to the next num
          current++;
          length++;
        }


        if (length > longest) {
            longest = length;
        }
      }
    }

    return longest;
  }
}
