"use strict";
class Mammal extends Animal {
    constructor(_name, _food, _durationOfPregnancy) {
        super(_name, _food);
        this._name = _name;
        this._food = _food;
        this._durationOfPregnancy = _durationOfPregnancy;
    }
    toString() {
        return `Mammal Data:\n ${super.toString()} \n Duration of Pregnancy: ${this._durationOfPregnancy}`;
    }
}
