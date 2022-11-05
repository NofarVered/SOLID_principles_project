"use strict";
class Mammal extends Animal {
    constructor(_name, _type, _food, _durationOfPregnancy) {
        super(_name, _food, _type);
        this._name = _name;
        this._type = _type;
        this._food = _food;
        this._durationOfPregnancy = _durationOfPregnancy;
    }
    get durationOfPregnancy() {
        return this._durationOfPregnancy;
    }
    toString() {
        return `Animal data:\n ${super.toString()} \n Mammal data: ${this._durationOfPregnancy}`;
    }
}
