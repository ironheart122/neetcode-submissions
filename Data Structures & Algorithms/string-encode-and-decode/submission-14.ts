class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
      // convert a list of strings into a long series of strings joined by their length header (LENGTH + DELIMITER)

      return strs.map((s) => {
        const length = s.length

        return `${length}#${s}`
      }).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
      // 2 pointer approach
      // i points to the start of the next payload inc length header + string to process
      // j points to the next '#'

      const result: string[] = []

      let i = 0;
      let j = i;

      while (i < str.length) {
        // find the next '#' character
        while (str[j] !== '#') {
          j++
        }

        // extract the length
        const length = parseInt(str.slice(i, j), 10)

        // the index of the first character of the string portion that follows '#'
        const indexStart = j + 1
        
        // the index of the first character of the next payload (length header + string).
        const indexEnd = indexStart + length

        const ogString = str.slice(indexStart, indexEnd)

        result.push(ogString)

        // update the i so it points to the very beginning of the next payload
        i = indexEnd
        // reset j at the beginning of the next payload
        j = i
      }

      return result
    }
}
