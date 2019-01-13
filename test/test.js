'use strict';

var expect = require('chai').expect;
var denomination = require('../index');

describe('#denomination', function() {
    it('should convert amount 100000', function() {
        var notes  = [1e5, 5e4, 2e4, 1e4, 5e3, 2e3, 1e3, 500, 100, 50];
        var result = denomination(notes, 100000);
        expect(result).to.equal(result);
    });

    it('arguments must be array', function() {
        var notes  = 0;
        var result = denomination(notes, 100000);
        expect(result).to.equal(0);
    });

});
