const seatAllocation = require('../seatOptions');

describe("Three seats available together on a plane ", () => {


    it('should return 4 if all seats free on 1 row', () => {
        expect(seatAllocation('',1)).toEqual(4);
    });

});