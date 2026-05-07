/**
 * We're writing a small protocol here.
 * The problem is really how to decode it.
 * The first 2 chars is a number on how long the BREAK between words is.
 * The next n chars (depending on the first 2 chars) contain the BREAK;
 * We then just split the string by that break
 * We now only need to find a string that does not occur. We will just guess and re-guess.
 * We will look at the length of the input and make a guess based on that.
 */
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length===0) {
            return "";
        }
        let randomBreakLength = String(strs.length).length;
        let randomBreak = this.generateRandomBreak(randomBreakLength);
        let count = 1;
        const joined = strs.join("");

        while(joined.includes(randomBreak)) {
            if(count>=5){
                randomBreakLength++;
                count=1
            }
            // We need to limit the break string to 2 digits in length, which should be more than enough.
            randomBreak = this.generateRandomBreak(randomBreakLength>99?99:randomBreakLength);
            count++;
        }
        const encoded = (randomBreakLength>99?99:randomBreakLength).toString().padStart(2,'0')+randomBreak+strs.join(randomBreak);
        console.log(encoded);
        return encoded;
    }


    /**
     * @param {number} length
     * @returns {string}
     */
    generateRandomBreak(length) {
        let breakStr = "";
        const randomNumber = Math.floor(Math.random() * 256) + 1;
        while(breakStr.length<length) {
        breakStr += String.fromCharCode(randomNumber);
        }
        if(breakStr === "") {
            breakStr = "_"
        }
        return breakStr;
    }

    

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str==="") {
            return [];
        }
        const breakLength = Number(str.substring(0,2));
        const breakString = str.substring(2,2+breakLength);
        const strs = str.substring(2+breakLength,str.length).split(breakString);
        return strs;

    }
}
