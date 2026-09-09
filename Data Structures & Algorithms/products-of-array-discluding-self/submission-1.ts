class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    // Brute forcing - O(n^2)

    const result: number[] = [];

    // I know this is super inefficient but i wanted to implement a naive solution that came to mind
    // Now the real challenge is to turn this into a proper O(n) solution.
    // It seems that we need to split this into 2 loop passes. Both passes update the product at the same index
    // Somehow we need to keep track of products for each index. The 2nd pass basically would finalize products
    // I need to figure out how to code this.
    /*
        for (let i = 0; i < nums.length; i++) {
            let product = 1;

            for (let j = 0; j < nums.length; j++) {
                if (j != i) {
                    product *= nums[j];
                }
            }

            result.push(product);
        }
        */

    // First pass
    const products: number[] = [];
    let runningProduct = 1;

    // prefix
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        products.push(runningProduct);
      } else {
        products.push(runningProduct * nums[i - 1]);
        runningProduct *= nums[i - 1];
      }
    }

    runningProduct = 1;

    // suffix
    for (let j = nums.length - 1; j >= 0; j--) {
        if (j === nums.length - 1) {
            result.push(runningProduct * products[j])
        } else {
            runningProduct *= nums[j+1];
            result.push(runningProduct * products[j])
        }
    }

    // reverse the result
    const final: number[] = []

    for (let i = nums.length - 1; i >= 0; i--) {
        final.push(result[i])
    }

    return final;
  }
}
