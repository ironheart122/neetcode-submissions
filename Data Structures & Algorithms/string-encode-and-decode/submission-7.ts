class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  private DELIMITER = "#";

  encode(strs: string[]): string {
    // Length_header (metadata about the length of the string. Its delimited by the first # that immediately follows after the length number (m).
    // So anything after the # is a string of any characters that is of the length m.

    const encodedArr: string[] = [];

    for (const str of strs) {
      const length = str.length;
      const metadata = `${length}${this.DELIMITER}`;
      const finalPayload = `${metadata}${str}`;

      encodedArr.push(finalPayload);
    }

    return encodedArr.join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    let i = 0;
    const result: string[] = [];

    // i = start of current length header
    // j = scans forward until '#'
    while (i < str.length) {
      let j = i;

      // find the '#' terminating the LENGTH header
      while (str[j] !== "#") {
        j++;
      }

      const length = parseInt(str.slice(i, j), 10);
      // now we have the length, lets use good ol String slice method to extract the substring that follows '#'
      // for reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
      // We need to determine both indexStart and indexEnd (which is NOT inclusive)
      
      let indexStart = j + 1
      let indexEnd = indexStart + length

      result.push(str.slice(indexStart, indexEnd))

      i = indexEnd // yeah forgot to add this
    }

    return result;
  }
}
