class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>();

        // O(n)
        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
        }

        // buckets[f] = numbers occurring exactly f times
        const buckets: number[][] =
            Array.from({ length: nums.length + 1 }, () => []);

        // O(u)
        for (const [num, frequency] of freqMap) {
            buckets[frequency].push(num);
        }

        const result: number[] = [];

        // O(n + u) collectively
        for (let frequency = nums.length; frequency >= 1; frequency--) {
            for (const num of buckets[frequency]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}