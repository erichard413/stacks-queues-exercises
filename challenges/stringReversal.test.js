const Deque = require("./stringReversal");

let deque;

beforeEach(function() {
  deque = new Deque();
});

describe("reverseString", function() {
    it("returns a reversed string from input", function() {
        expect(deque.reverseString("ERIK")).toBe("KIRE");
        expect(deque.reverseString("RETURNS A REVERSED STRING FROM INPUT")).toBe("TUPNI MORF GNIRTS DESREVER A SNRUTER");
    })
  })