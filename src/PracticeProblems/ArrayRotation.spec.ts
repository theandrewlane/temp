import "jasmine";
import { ArrayRotation } from "./ArrayRotation";

describe("ArrayRotation class", () => {
    let arrayRotation: ArrayRotation;
    beforeEach(() => {
        arrayRotation = new ArrayRotation();
    });
    describe("rotate method", () => {
        it("should handle garbage input", () => {
            const arr1: any[] = [];
            const garbage = true;
            const n = 0;
            const garbageNumber = "garbage";
            const result: any[] = [];
            const test = arrayRotation.rotate(arr1, n);
            if (test) {
                expect(test.length).toBeCloseTo(0);
            }
            // @ts-ignore
            expect(arrayRotation.rotate(garbage, n)).toBeUndefined();
            // @ts-ignore
            expect(arrayRotation.rotate(arr1, garbageNumber).length).toBeCloseTo(0);
        });
        it("should handle empty-array input", () => {
            const arr1: any[] = [];
            const n = 0;
            const result: any[] = [];
            const test = arrayRotation.rotate(arr1, n);
            if (test) {
                expect(test.length).toBeCloseTo(0);
            }
        });
        it("should rotate an array by n places", () => {
            const arr1 = [1, 2, 3, 4, 5];
            const n = 3;
            const result = [3, 4, 5, 1, 2];
            expect(arrayRotation.rotate(arr1, n)).toEqual(result);
        });
        it("should handle negative numbers", () => {
            const arr1 = [1, 2, 3, 4, 5];
            const n = -32;
            const result = [3, 4, 5, 1, 2];
            expect(arrayRotation.rotate(arr1, n)).toEqual(result);
        });
        it("should handle numbers larger than the array itself", () => {
            const arr1 = [1, 2, 3, 4, 5];
            const n = 32;
            const result = [4, 5, 1, 2, 3];
            expect(arrayRotation.rotate(arr1, n)).toEqual(result);
        });
    });
});
