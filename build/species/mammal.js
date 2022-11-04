"use strict";
class Mammal extends Animal {
    constructor(_name, _food, _durationOfPregnancy, _type) {
        super(_name, _food, _type);
        this._name = _name;
        this._food = _food;
        this._durationOfPregnancy = _durationOfPregnancy;
        this._type = _type;
    }
    toString() {
        return `Animal data:\n ${super.toString()} \n Mammal data: ${this._durationOfPregnancy}`;
    }
}
