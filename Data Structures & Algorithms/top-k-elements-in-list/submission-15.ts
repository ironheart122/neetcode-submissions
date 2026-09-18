class Solution {
  topKFrequent(nums: number[], k: number): number[] {
    // invariant: buckets[f] contains exactly the distinct values occurring f times
    // 3 pass
    // Time: O(n)
    // Space: O(n)

    // first pass - frequency counting - use Map
    const freqMap = new Map<number, number>();
    for (const num of nums) {
      freqMap.set(num, (freqMap.get(num) ?? 0) + 1)
    }

    // frequency bucket
    const bucket: number[][] = Array.from({ length: nums.length + 1}, () => {
      return []
    })

    // initialize the bucket
    for (const [num, count] of freqMap) {
       bucket[count].push(num)
    }

    // Collect the top k elements from the bucket (backwards) and store them in an array. Stop when the array's size hits k
    // reverse loop
    // i = 6,5,4,3,2,1
    const result: number[] = [];

    for (let i = bucket.length - 1; i >= 0; i--) {
      for (const num of bucket[i]) {
        result.push(num)

        if (result.length === k) {
          return result;
        }
      }
    }

    return result;
  }
}
