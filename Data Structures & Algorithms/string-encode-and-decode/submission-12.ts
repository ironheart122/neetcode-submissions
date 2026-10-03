class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    // Ok, one way to make sure encoded strings are unambiguous, we prefix the length header to each string
    // It works cos it doesnt mess with original strs when encoding and that the length can be used to extract an original str as a substr from the encoded long string
    // A naive solution like joining strings by '#' wont work cos a string can contain '#'. It might work if we use a non ascii character as a delimiter but
    // i want to make sure my solution works with any character. Ok lets go

    // eg hello, world === "6#hello5#world"
    return strs
      .map((s) => {
        const lengthHeader = `${s.length}#`;

        return `${lengthHeader}${s}`;
      })
      .join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    // 2 pointers = i and j will be used to process the string in a loop

    let i = 0; // keep track of the beginning of the string. It gets updated when we're done parsing the length and extracting an OG string
    let j = i; // Tracks the next '#' character

    const result: string[] = [];

    while (i < str.length) {
      // find the index of the next '#' character in the string

      while (str[j] !== "#") {
        j++;
      }


      const length = parseInt(str.slice(i, j), 10);
      const newStart = j + 1;

      const ogString = str.slice(newStart, newStart + length);

      result.push(ogString);

      i = newStart + length;
      j = i
    }

    return result;
  }
}
