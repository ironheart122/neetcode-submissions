class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // SO here im gonna just go through the array and for every element, we check if we've seen the diff of this and the target before,
        // if so, we return the indices of the diff and the current element. We will use Set for this. The solution will run in O(n) time
        
        const seen = new Map<number, number>()

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]

            if (seen.has(diff)) {
                const prevIndex = seen.get(diff)

                if (prevIndex !== undefined) return [prevIndex, i]
            }

            seen.set(nums[i], i)
        }

        return []
    }
}
