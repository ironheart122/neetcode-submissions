class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        // BRUTEFORCING 
        // Time complexity: O(n log n + m log m)
        // Ok so say you have both strings. If we sort them so characters in them are alphabetically ordered then we can check if they are equal or not.
        // return s.split("").sort().join("") === t.split("").sort().join("");

        const map: Map<string, number> = new Map();

        // First pass
        for (let i = 0; i < s.length; i++) {
            const currentChar = s[i];

            if (map.get(currentChar)) {
                const count = map.get(currentChar);

                // increment the count
                map.set(currentChar, count + 1);
            } else {
                // Ok this is new, lets add this character to the map and set the count to 1
                map.set(currentChar, 1);
            }
        }

        let isAnagram = true;
        console.log("2nd pass");

        // Second pass - for each iteration, update the map if we've seen the character before by decrementing
        // the count by 1. SO after the 2nd pass, we check the map to find at least one pair where the value is > 0. If found then we know that both strings differ in terms of letter frequency
        for (let j = 0; j < t.length; j++) {
            const currentChar = t[j];
            const fetchedCharCount = map.get(currentChar);

            if (fetchedCharCount) {
                const count = fetchedCharCount;
                const updated = count - 1;

                if (updated === 0) {
                    map.delete(currentChar);
                } else {
                // decrement the count
                map.set(currentChar, updated)

                }

            } else {
                isAnagram = false;
                
            }
        }

        console.log("MAP: ", map);

        if (map.size > 0) {
            isAnagram = false;
        }
        return isAnagram;
    }
}
