class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // O(n) // use hash map to store a computed diff for every iteration. Stop and return the index of the diff if found

        const map: Map<number, number> = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            // WTF!!!! THISSSSS
            if (map.has(nums[i])) {
                return [map.get(nums[i]), i]
            }

            map.set(diff, i)
        }

        console.log("map: ", map);

        return []
    }
}
