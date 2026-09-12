class Solution {
  topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();

    // Frequency counting
    // O(n)
    for (const num of nums) {
      freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
    }

    // we know that frequency count is between 0 and nums.length. Right so we create a frequency bucket
    const frequencyBuckets: Array<number[]> = Array.from(
      {
        length: nums.length + 1,
      },
      () => [],
    );

    // O(m where m is the number of distinct elements)
    for (const [k, v] of freqMap.entries()) {
      frequencyBuckets[v].push(k);
    }

    const result: number[] = [];

    for (let i = frequencyBuckets.length; frequencyBuckets.length >= 0; i--) {
      if (frequencyBuckets[i]) {
        for (const n of frequencyBuckets[i]) {
          result.push(n);

          if (result.length === k) {
            return result;
          }
        }
      }
    }

    return result;
  }
}
