// Time complexity: O(n)
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const n: number = nums.length;

        // This operation costs O(n)
        const uniques: Set<number> = new Set(nums);

        // Basically if there are exactly X unique elements in the array and that its equal to the length of the array, it would mean there are no duplicates
        return uniques.size !== n
    }
}
