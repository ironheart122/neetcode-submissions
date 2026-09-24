class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  // NON ASCII CHARACTER THAT SERVES AS A DELIMITER FOR NON WHITESPACE characters
  private DELIMITER = "¥";
  private EMPTY = "é";

  encode(strs: string[]): string {
    // Assume a string can contain any possible char out of 256 valid ASCII characters
    // Ok, so a naive solution involving using a delimiter like "#" or even "#{LENGTH_OF_THE_ADJACENT_WORD} or EVEN \n"
    // WONT WORK cos a string can happen to contain exactly a delimiter substring.
    // so we need to figure out a safe way to encode a list of strings into an unambiguous string
    // That means we need to use a different character thats outside the ascii table.
    // Lets try a non ascii character: ¥ (lol i doubt this will pass all the test cases but lets go.)

    if (strs.length === 0) return this.EMPTY;

    return strs.join(this.DELIMITER)
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    if (str === this.EMPTY) {
        return []
    }
    
    return str.split(this.DELIMITER)
  }
}
