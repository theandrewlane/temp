export class BalancedDelimiter {
    /**
     * Given a string this method will search for Balanced Delimiters (e.g. (,{,[,],},))
     * @param {string} str - The value being checked for Delimiter balance
     * @return {boolean} - whether or not each left delimiter was paired with a right delimiter
     */
    public check(str: string): boolean {
        // ARGUMENT MUST BE A STRING AND OF AN EVEN-NUMBERED LENGTH
        if (typeof str !== "string" || str.length % 2 !== 0) {
            return false;
        }
        // MAY ONLY CONTAIN CHARACTERS OF THE SET "{}()[]"
        if (!/^(\{|\}|\(|\)|\[|\]|)*$/.exec(str)) {
            return false;
        }
        const matches = new Map();
        const leftRegexp =  /(\(|\{|\[)/;
        for (let leftMatchIndex = 0; leftMatchIndex < str.length; leftMatchIndex++) {
            if (matches.has(leftMatchIndex)) {
                continue;
            }
            const leftMatch = leftRegexp.exec(str[leftMatchIndex]);
            if (leftMatch) {
                // FIND THE CORRESPONDING RIGHT MATCH
                const rightMatchIndex = this.findNextRightMatch(leftMatch[1], leftMatchIndex, str, matches);
                if (rightMatchIndex) {
                    matches.set(leftMatchIndex, rightMatchIndex);
                    matches.set(rightMatchIndex, leftMatchIndex);
                } else {
                    // IF THERE'S NO RIGHT MATCH WE'RE DONE
                    return false;
                }
                continue;
            }
        }
        return matches.size === str.length;
    }
    /**
     * Loops through a string looking for a unique match to a character delimiter
     * @param {string} char - One of: (, {, [
     * @param {number} currentIndex - The index from which to start searching the string
     * @param {string} str - The original string, such that we pass back the correct index
     * @param {Map<number, number>} matches - This is the map we are using to ensure each match is unique
     * @returns {number | undefined} - The index of the next most right match in the string,
     * or undefined if it's not found
     */
    private findNextRightMatch(
        char: string, currentIndex: number, str: string, matches: Map<any, any>
    ): number | undefined {
        const rightMatch = this.getMatchingCharacter(char);
        // LOOP THROUGH THE REMAINING STRING AND LOOK FOR A MATCH
        for (let i = currentIndex + 1; i < str.length; i++) {
            if (matches.has(i)) {
                continue;
            }
            if (str[i] === rightMatch) {
                return i;
            }
        }
        return undefined;
    }
    /**
     * Matches the left side of a delimiter with it's right side
     * @param {string} char - One of: (, {, [
     * @returns {string} - One of: ), }, ]
     */
    private getMatchingCharacter(char: string): string {
        switch (char) {
            case "(": return ")";
            case "{": return "}";
            case "[": return "]";
            default: return "nope";
        }
    }
}
