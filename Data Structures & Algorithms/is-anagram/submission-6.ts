class Solution {
  isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const counts = new Map<string, number>();

    // Count each character in s.
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      counts.set(char, (counts.get(char) ?? 0) + 1);
    }

    // Invariant:
    // counts represents characters from s that haven't yet
    // been matched by the processed portion of t.
    for (let i = 0; i < t.length; i++) {
      const char = t[i];
      const count = counts.get(char);

      // t requires a character that s has no remaining copy of.
      if (count === undefined) {
        return false;
      }

      if (count === 1) {
        counts.delete(char);
      } else {
        counts.set(char, count - 1);
      }
    }

    return counts.size === 0;
  }
}