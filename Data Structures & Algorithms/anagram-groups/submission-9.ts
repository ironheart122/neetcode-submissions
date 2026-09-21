class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
      // Ok, so we need to create an array of signatures where signatures[i] that represents the counts of a-z letters. If there are 2 strings that share the same signature then they belong to the same group.

      // first lets create signatures

      // eg counts[2] = 3 means 
      const signatures = strs.map((str) => {
        const chars = str.split("")
        const letterFreqCounts = Array.from({
          length: 26
        }, () => 0);

        chars.forEach((c) => {
          const index = c.charCodeAt(0) - 97
          letterFreqCounts[index]++
        })

        return letterFreqCounts.join("#"); // delimiter to avoid collisions
      })

      // Group strs by signature

      const map = new Map<string, string[]>()

      for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const sig = signatures[i]

        if (!map.has(sig)) {
          map.set(sig, [])
        }

        map.get(sig).push(str)
      }

      return [...map.values()]
    }


}
