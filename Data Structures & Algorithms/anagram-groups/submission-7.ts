class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length === 1) {
            return [strs]
        }

        // one approach is to basically encode a word by converting it to a [a-z] signature where each letter maps to its frequency count. Eg abc = 111000...0, aab = 21000..000. That way, if we have 2 words that happen to share the same a-z signature then they belong to the same group. I believe we will need at least 2 loops 

        const alphabets = "abcdefghijklmnopqrstuvwxyz";
        const alphaArr = alphabets.split("");

        // create a new hash map for each str that contains unique character/count pairs
        // O(m * n)
        const hashMapsArr = strs.map((str) => { // O(m)
            const chars = str.split(""); // O(n);
            const uniqs = [...new Set(chars)]
            const result: Array<[string, number]> = uniqs.map((u) => [u, 0]);
            const map: Map<string, number> = new Map(result);

            return map;
        })

        // counting
        // O(m * n)
        for (let i = 0; i < strs.length; i++) {
            const ownMap = hashMapsArr[i];
            const chars = strs[i].split("");

            for (let m = 0; m < chars.length; m++) {
                const char = chars[m]

                if (ownMap.has(char)) {
                    ownMap.set(char, ownMap.get(char) + 1);
                }

            }
        }

        // create a signature for each str
        // O(n * C)
        const signatures = hashMapsArr.map((hmap, index) => {
            let signatureStr = "";

            // O(C) C is always equal to 26 
            for (let i = 0; i < alphaArr.length; i++) {
                const alphabetLetter = alphaArr[i];
                const value = hmap.get(alphabetLetter) || "0";

                signatureStr += `${value}#`
            }

            return signatureStr;
        })


        // grouping by signature

        const strsBySignatureMap = new Map<string, Array<string>>();

        // O(n)
        for (let i = 0; i < signatures.length; i++) {
            const signature = signatures[i];
            const str = strs[i];
            const group = strsBySignatureMap.get(signature)

            if (strsBySignatureMap.has(signature)) {
                group.push(str)
            } else {
                strsBySignatureMap.set(signature, [str])
            }

        }

        const result = [];
        
        strsBySignatureMap.forEach((val) => {
            result.push(val)
        })


        return result;
    }
}
