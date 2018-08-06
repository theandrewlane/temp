export class ArrayRotation {
    /**
     * Rotates an array of elements by a number to the right
     * @param {any[]} arr - The Array to manipulate
     * @param {number} n - The number to shift everything to the right
     */
    public rotate(arr: any[], n: number): any[] | undefined {
        if (!Array.isArray(arr)) {
            return undefined;
        }
        if (typeof n !== "number") {
            return arr;
        }
        const l = arr.length;
        const scaledRotation = this.scaleRotation(l, n);
        const startIndex = arr.length - scaledRotation;
        arr.unshift(...arr.splice(startIndex, scaledRotation));
        return arr;
    }
    /**
     * Shortcut to scaling the rotation request since we aren't doing it in O(n)
     * @param {number} lengthOfArray
     * @param {number} numberOfElementsToRotate
     * @returns {number}
     */
    private scaleRotation(lengthOfArray: number, numberOfElementsToRotate: number): number {
        let result = numberOfElementsToRotate;
        if (numberOfElementsToRotate > lengthOfArray) {
            result = numberOfElementsToRotate % lengthOfArray;
        }
        if (numberOfElementsToRotate < 0) {
            result = lengthOfArray + (numberOfElementsToRotate % lengthOfArray);
        }
        return result;
    }
}
