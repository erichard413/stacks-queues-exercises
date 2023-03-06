const calculator = require('./calculator');

// calc("+ 1 2")  # 1 + 2 == 3

// calc("* 2 + 1 2")  # 2 * (1 + 2) == 6

// calc("+ 9 * 2 3")   # 9 + (2 * 3) == 15
// Let’s make sure we have non-commutative operators (subtraction and division) working:

// calc("- 1 2")  # 1 - 2 == -1

// calc("- 9 * 2 3")  # 9 - (2 * 3) == 3

// calc("/ 6 - 4 2")  # 6 / (4 - 2) == 3

describe("testing calculator", function(){
    it("should calculate correct number", function(){
        expect(calculator("+1 2")).toBe(3);
        expect(calculator("*2 + 1 2")).toBe(6);
        expect(calculator("+9 * 2 3")).toBe(15);
        expect(calculator("-1 2")).toBe(-1);
        expect(calculator("-9 * 2 3")).toBe(3);
        expect(calculator("/6 - 4 2")).toBe(3);
    })
})