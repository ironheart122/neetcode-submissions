class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // store a computed diff in the map for later lookups. If found, we can assume we've already seen the diff in the array before
        const seen: Map<number, number> = new Map();

        // O(n)
        for (let i = 0; i < nums.length; i++) {
            const currNumber = nums[i]
            const diff = target - currNumber;
            
            // Have we seen this before?
            if (seen.has(diff)) {
                // If we've seen this before, then yep we've found both numbers that sums up to the target

                return [seen.get(diff), i]
            } else {
                // if not, store the current number/its index in the map
                seen.set(currNumber, i);
            }
            
        }
    }
}
