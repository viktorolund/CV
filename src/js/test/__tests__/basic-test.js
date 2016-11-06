'use strict';

function sortList(list) {
    if (Array.isArray(list)) {
        return list.sort(function(a, b) {
            return a - b;
        });
    }
}

describe('function sortList', function() {
    it('should return a sorted array', function() {
        var listSrc = [21, 5, 13, 8, 1, 2, 3];

        expect(sortList(listSrc)).toEqual([1, 2, 3, 5, 8, 13, 21]);
    });
});
