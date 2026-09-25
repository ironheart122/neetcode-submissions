class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    // first we need to find a candidate number from which a new consecutive chain can be built. Keep building until we cant find the next consecutive number and thats when we reset the chain. Repeat until we run out of candidate numbers

    // Ok we need to collect distinct numbers first
    const set = new Set<number>(nums);

    // initialCandidate
    let longest = 0;
    let chain: number[] = [];

    for (const num of set) {
      if (!set.has(num - 1)) {
        let count = 1;
        chain = [num]

        // Building the chain?
        // Stop the chain is as long as the nums array OR when there are no more next number to find


        let next = num + 1;
        while (chain.length < nums.length) {

          // Check if the set has the next new number
          if (set.has(next)) {
            count++;
            chain.push(next);
            next++;
          } else {
            break;
          }
        }

        if (count > longest) {
          longest = count;
        }



      }
    }

    return longest;
  }
}
