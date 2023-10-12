import { Main } from "../app.js";

describe("BerlinClock Function", () => {


    
    let main = new Main();


    it("should return 4 or a number above 4 when input is 4", () => {
        let result = main.BerlinClock(4);
        expect(result).toBe(4);
        expect(result).toBeGreaterThanOrEqual(4);
    });


    it("should return 3 or a number above 3 when input is 3", () => {
        let result = main.BerlinClock(3);
        expect(result).toBe(3);
        expect(result).toBeGreaterThanOrEqual(3);
    });

    it("should return 2 or a number above 2 when input is 2", () => {
        let result = main.BerlinClock(2);
        expect(result).toBe(2);
        expect(result).toBeGreaterThanOrEqual(2);
    });

    it("should return 1 or a number above 1 when input is 1", () => {
        let result = main.BerlinClock(1);
        expect(result).toBe(1);
        expect(result).toBeGreaterThanOrEqual(1);
    });
});