class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // create a map <strId, [strs]>
        // iterate strs, create strId, add it to the map
        // return map values
        const outputMap = new Map();

        for(let i = 0; i<strs.length;i++) {
            const word = strs[i];
            const id = this.makeIdFromString(word);
            const existingAnagrams = outputMap.get(id)??[];
            existingAnagrams.push(word);
            outputMap.set(id,existingAnagrams);
        }

        return Array.from(outputMap.values())
    }

    /**
     * Creates a unique "anagram" id for a string
     * @param {string} str
     * @return {string}
     */
    makeIdFromString(str) {
       
       const count = new Array(26).fill(0)
        for(let i = 0;i<str.length;i++) {
           count[str[i].charCodeAt(0) - 97]++
        }
        return String(count);
    }
}
