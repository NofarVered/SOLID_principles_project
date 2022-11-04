"use strict";
class Fish extends Animal {
    constructor(_name, _food, _lowestDepth, _type) {
        super(_name, _food, _type);
        this._name = _name;
        this._food = _food;
        this._lowestDepth = _lowestDepth;
        this._type = _type;
    }
    toString() {
        return `Animal data:\n ${super.toString()} \n Fish data: ${this._lowestDepth}`;
    }
}
