/**
 * For this simple task, we can just use the build in Set
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const set = new Set();
       nums.forEach(num=>set.add(num));
       return set.size < nums.length;
    }
}
