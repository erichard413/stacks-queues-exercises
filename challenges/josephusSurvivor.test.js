const find_survivor = require('./josephusSurvivor');

describe("testing josephus survivor", function(){
    it("returns correct survivor", function() {
        expect(find_survivor(10,3)).toBe(4);
    })
})
