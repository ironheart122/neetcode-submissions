class Solution {
    twoSum(nums: number[], target: number): number[] {
        // seen[value] = index of a previously processed value
        const seen = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            const previousIndex = seen.get(diff);

            if (previousIndex !== undefined) {
                return [previousIndex, i];
            }

            seen.set(nums[i], i);
        }

        return [];
    }
}