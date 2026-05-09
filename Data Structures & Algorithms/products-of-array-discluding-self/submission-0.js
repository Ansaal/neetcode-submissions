class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
   
        const output = [];
        const prefixArray = [0];
        const suffixArray = [0];
        let prefixSum = 0;
        let suffixSum = 0;
        for(let i = 0;i<nums.length;i++) {
            prefixArray[i] = prefixSum;
            suffixArray[i] = suffixSum;

            if(i>0) {
                prefixSum = nums[i] * prefixSum;
                suffixSum = nums[nums.length-i-1] * suffixSum;
            } else {
                prefixSum = nums[i];
                suffixSum = nums[nums.length-1-i];
            }
        }

        for(let i = 0;i<nums.length;i++) {
            if(i>0 && i < nums.length-1) {
            output[i] = (prefixArray[i]) * (suffixArray[suffixArray.length-1-i]);
            }
            if(i==0) {
                output[i] = suffixArray[suffixArray.length-i-1]
            } 
            if(i == nums.length-1) {
                output[i] = prefixArray[i];
            }
        }
        return output;
    }
}
