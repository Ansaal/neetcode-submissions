class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        // We put everything in a map
        const numMap = {};
        for(let i = 0;i<nums.length;i++) {
            numMap[nums[i]] = (numMap[nums[i]]??0)+1;
        }
        // We sort the map by value, slice the top k off and return the keys
        return Object.entries(numMap).sort((entryA,entryB)=>entryB[1]-entryA[1]).slice(0,k).map(entry=>entry[0]);
    }
}
