class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Attempt 1 - naive solution in O(n log n);
        const distinctElementsSet: Set<number> = new Set(nums);

        if (distinctElementsSet.size === 1) {
            return [nums[0]];
        }

        // create frequency map
        const freqMap: Map<number, number> = new Map();
        const distinctElementsArr: number[] = [...distinctElementsSet];

        for (const d of distinctElementsArr) {
            freqMap.set(d, 0);
        }

        // count
        for (let i = 0; i < nums.length; i++) {
            const currNum = nums[i];

            freqMap.set(currNum, freqMap.get(currNum) + 1)
        }

        console.log("freqMap: ", freqMap)

        // ranking?
        const unranked: Array<{ num: number, count: number}> = [];

        freqMap.forEach((value, key) => {
            const entry: { num: number, count: number} = {
                num: key,
                count: value
            }

            unranked.push(entry)
        })


        // sort unranked
        unranked.sort((a, b) => {
            return b.count - a.count
        });
        console.log("ranking: ", unranked);

        // slice the top k elements out of the sorted unranked
        const kthSliced = unranked.slice(0, k)
        console.log("kthSliced: ", kthSliced);

    
        return kthSliced.map((v) => v.num)
    }
}
