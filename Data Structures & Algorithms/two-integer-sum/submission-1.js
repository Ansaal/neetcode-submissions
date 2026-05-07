class Solution {
    /**
     * For this classic two-sum, we just use a map and check whether the matching number has already been found. 
     * This guarantees when we reach the end of num that we will have checked every possible combinations.
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const valueMap = new Map();
        for(let i = 0; i< nums.length; i++) {
            const foundPair = valueMap.get(target-nums[i]);
            if(foundPair!=undefined) {
                return [foundPair, i]
            }
            valueMap.set(nums[i],i);
        }
        return []
    }
}
