class Solution {
    // Im gonna use my solution that produces a unambiguous encoded string from a given array of strings that  can contain any character. 
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // First we generate the length header for a given string and it has the following structure
        // [LENGTH]#STRING. # is the delimiter. Length header parser will treat everything before # as the length. Ok lets go

        // O(n) where n is the number of strings
        return strs.map((s) => {
            const lengthHeader = `${s.length}#`

            return `${lengthHeader}${s}`
        }).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // here we will use 2 cursors: i and j
        // i points to the beginning of a substring of the form LENGTH#STRING and j traverses to find the index of the next '#'

        let i = 0;

        const result: string[] = [];

        while (i < str.length) {
            let length = 0;
            let j = i;

            // Now we're gonna start with extracting and parsing the length header
            // first we hunt for the next '#'

            while (str[j] !== '#') {
                j++;
            }
            
            // awesome ok we've got the index of the next '#' character. Now we use String slice method to extract the length
            length = parseInt(str.slice(i, j), 10);

            let start = j + 1
            let end = start + length
            // 3#cat
            // Slice returns a substring of the string that starts at the indexStart all the way to the indexEnd exclusive
            result.push(str.slice(start, end))
            // now we have enough info (length, the start and the end)
            i = start + length
        }

        return result;
    }
}
