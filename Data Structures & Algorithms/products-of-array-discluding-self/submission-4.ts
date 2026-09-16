class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    // Space: O(n)
    const result = new Array<number>(nums.length);


    // For the first element, store the product = 1 in result[i] 
    let product = 1;
    result[0] = product;

    // Time: O(n)
    // The first pass - calculate the product of all elements to the left of nums[i] exclusive
    // Prefix
    for (let i = 1; i < nums.length; i++) {
      // For each iteration afterwards, calculate the product of the product of previous elements except the last one and the last one
      result[i] = product * nums[i-1]
      product = result[i]
    }

    console.log("result = ", result)

    product = 1
  
    // Time: O(n)
    // The second pass - calculat the product of all elements to the right of nums[i] exclusive
    // Suffix
    for (let j = nums.length - 1; j >= 0; j--) {
      const prefix = result[j]
      result[j] = prefix * product;
      // calculate product for the next iteration
      product *= nums[j]
    }

    return result;
  }
}
