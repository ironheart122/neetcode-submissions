class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
      // Time: O(n)
      // Space: O(1)
      // Ok, so we need to create an array of signatures where signatures[i] that represents the counts of a-z letters. If there are 2 strings that share the same signature then they belong to the same group.

    const groups = new Map<string, string[]>()

    for (const str of strs) {
      const counts = new Array(26).fill(0);
      
      for (const c of str) {
        const index = c.charCodeAt(0) - "a".charCodeAt(0);
        counts[index]++
      }

      const signature = counts.join("#");

      if (!groups.has(signature)) {
        groups.set(signature, [])
      }

      groups.get(signature).push(str)
    }

    return [...groups.values()]
    }


}
