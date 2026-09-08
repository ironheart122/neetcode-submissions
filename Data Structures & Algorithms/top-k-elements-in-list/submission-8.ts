class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    // Attempt 2 - Optimal solution in O(n) time

    // O(n)
    const distinctElementsSet: Set<number> = new Set(nums);

    if (distinctElementsSet.size === 1) {
      return [nums[0]];
    }

    // create frequency map
    const freqMap: Map<number, number> = new Map();
    // O(u) where u = number of distinct elements (u <= n)
    const distinctElementsArr: number[] = [...distinctElementsSet];

    // O(u)
    for (const d of distinctElementsArr) {
      freqMap.set(d, 0);
    }

    // count
    // O(n)
    for (let i = 0; i < nums.length; i++) {
      freqMap.set(nums[i], (freqMap.get(nums[i]) ?? 0) + 1);
    }

    console.log("freqMap: ", freqMap);
    
    // inverseFreqMap
    // Use existing frequency counts as key this time. Value is an array of elements that occur [key] times in the og array
    const inverseFreqMap: Map<number, number[]> = new Map();

    // O(n)
    freqMap.forEach((value, key) => {
      const freqCount = value;

      if (inverseFreqMap.get(freqCount)) {
        const freqElemsArr: number[] = inverseFreqMap.get(freqCount);
        freqElemsArr.push(key);
        inverseFreqMap.set(freqCount, freqElemsArr);
      } else [inverseFreqMap.set(freqCount, [key])];
    });

    const resultSet: Set<number> = new Set(); // max size should be k


    // O(n)
    for (let j = nums.length - 1; j >= 0; j--) {
        const countKey = j;

        if (inverseFreqMap.get(countKey)) {
            const freqElementsArr = inverseFreqMap.get(countKey);
            

            for (let j = 0; j < freqElementsArr.length; j++) {
                resultSet.add(freqElementsArr[j])
            }

        }

        if (resultSet.size === k) {
            break;
        }

    }

    return [...resultSet]
  }
}
