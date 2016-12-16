'use strict';

var myCareer = require('./data/my-career.json');

function Career() {
    this.careerData = myCareer;
}

Career.prototype.find = function(findCB) {

    if (findCB && typeof findCB === 'function') {
        try {
            return findCB(this.careerData);
        } catch(err) {
            return findCB(err);
        }
    } else {
        throw new Error("Kan inte returnera data");
    }
}

module.exports = Career;
