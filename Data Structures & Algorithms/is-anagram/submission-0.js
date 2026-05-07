class Solution {
    /**
     * For this simple Anagram, we just use to Maps and compare entries.
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // early return to avoid edge cases
        if(s.length!=t.length) {
            return false;
        }

        const sCharacterMap = new Map();
        const tCharacterMap = new Map();

        for(let i = 0; i<s.length;i++) {
            sCharacterMap.set(s[i],(sCharacterMap.get(s[i])??0)+1);
            tCharacterMap.set(t[i],(tCharacterMap.get(t[i])??0)+1);
        }
        for(const [character, sCount] of sCharacterMap) {
            const tCount = tCharacterMap.get(character);
                    if(tCount!=sCount) {
                        return false
                    }
        }
        return true;
    }
}
