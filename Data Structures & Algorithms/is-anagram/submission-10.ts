class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    // One solution is to create a map to keep track of each character of the string s along with their freq counts.
    // In the 2nd pass loop, for each character in the string t, use the map^ to look up for any matching character and decrement the value. If the resulting value is zero,
    // then delete the key. SO at the end of the 2nd pass loop, if the map is empty, return true. Otherwise, false. Both strings are anagram of each other if they share the exact set of characters/their same freq count. So thats a O(n) solution alright

    const freqMap = new Map<string, number>();

    // Forgot to add this (first submission failed until i fixed this)
    if (s.length !== t.length) {
      return false;
    }

    for (const c of s) {
      freqMap.set(c, (freqMap.get(c) ?? 0) + 1);
    }


    for (const c of t) {
      if (!freqMap.has(c)) {
        continue;
      }

      const countUpdate = freqMap.get(c) - 1;

      if (countUpdate === 0) {
        freqMap.delete(c);
      } else {
        freqMap.set(c, countUpdate);
      }
    }

    return freqMap.size === 0;
  }
}
