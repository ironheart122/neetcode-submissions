class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const distinctElements = new Set(nums);
        
        // forgot to add this (didnt read the question properly but i knew hwat i need to do)
        if (k > distinctElements.size) return [];

        if (nums.length === 1) return nums;

        // frequency counting + frequency bucket
        // basically we need to build bucket where if given bucket[f] then it returns a list of numbers that occurs f times in the nums array

        const freqMap = new Map<number, number>();

        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
        }

        // frequency bucket
        const bucket = Array.from({ length: nums.length + 1 }, () => []);

        for (const [element, count] of freqMap) {
            if (!bucket[count]) {
                bucket[count] = [];
            }

            bucket[count].push(element);
        }

        const result: number[] = [];

        // Loop through the bucket backwards
        let count = 0;

        for (let i = bucket.length - 1; i > 0; i--) {
            if (count === k) {
                return result;
            }

            const value = bucket[i];

            for (const v of value) {
                if (v.length === 0) continue;

                result.push(v);
                count++;
            }
        }

        // I debugged until i realized that the function returns a hardcoded []. I changed it to result lol
        return result;
    }
}
