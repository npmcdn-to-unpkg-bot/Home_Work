var pow = require('../dist/js/pow.js');

describe("Test pow function", function() {
    it("5^4", function() {
        var result;
        result = pow(5, 4);
        expect(result).toEqual(625);
    });

    it("5^4", function() {
        var result;
        result = pow(3, 17);
        expect(result).toEqual(129140163);
    });
});
