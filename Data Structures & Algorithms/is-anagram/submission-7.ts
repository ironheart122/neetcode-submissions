class Solution {
  isAnagram(s: string, t: string): boolean {
    // time complexity - O(n + m)
    // 2 pass solution with hashing
    // first pass is to handle letter counting
    // 2nd pass is to go through the 2nd string while decrementing the letter count for each character using the same map fromn the first pass

    // if both strings are not equal, length wise, return false
    if (s.length !== t.length) return false;

    const map: Map<string, number> = new Map();

    // first pass - letter counting (map represents a list of pairs: letter + its frequency count)
    for (let i = 0; i < s.length; i++) {
      const char = s[i];

      if (map.has(char)) {
        // increment the count
        map.set(char, map.get(char) + 1)
      } else {
        map.set(char, 1)
      }
    }

    // second pass - update the map by decrementing the count. If the new count is 0, delete the key. After the loop, if the map size is 0 then we can assume the string t is an anagram of the string s. Come on, its so obvious right?

    for (let j = 0; j < t.length; j++) {
      const char = t[j];

      // abort if the char doesnt exist in the map
      if (!map.has(char)) {
        return false; // abort
      }

      const newCount = map.get(char) - 1;

      if (newCount === 0) {
        map.delete(char);
      } else {
        map.set(char, newCount);
      }
    }

    return map.size === 0;
  }
}