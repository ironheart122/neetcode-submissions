// Solved with assistance + overtime
// TODO: redo from scratch. Should be optimal etc.
class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */

  groupAnagrams(strs: string[]): string[][] {
    // Sorting word is the easiest to solve this but its inefficient - O(m log m) where m is the number of strings
    // So theres a more efficient solution that runs in O(m * n) where n is the longest string with n length

    // Each word has an unique 26 letter frequency signature. SO if 2 words share the same signature they belong to the same group

    const groups = new Map<string, string[]>();

    // O(m * n) time
    for (let i = 0; i < strs.length; i++) {
      // 26 frequency bucket
      const counts = new Array(26).fill(0);

      const word = strs[i];

      // O(n) - we iterate through each character of the word
      for (const char of word) {
        // count letter frequency of the word and update counts
        counts[char.charCodeAt(0) - 97]++; // extract the index (bucket position) of the character
      }

      // Without it, [1, 11] and [11, 1] produce the same string
      // O(L where L = 26)
      const signature = counts.join("#");

      // initalize the group key/pair if key is new
      if (!groups.has(signature)) {
        groups.set(signature, []);
      }

      // push word into the signature group
      groups.get(signature)!.push(word);
    }

    return Array.from(groups.values());
  }
}
