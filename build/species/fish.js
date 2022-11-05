"use strict";
class Fish extends Animal {
    constructor(_name, _type, _food, _lowestDepth) {
        super(_name, _food, _type);
        this._name = _name;
        this._type = _type;
        this._food = _food;
        this._lowestDepth = _lowestDepth;
    }
    get lowestDepth() {
        return this._lowestDepth;
    }
    toString() {
        return `Animal data:\n ${super.toString()} \n Fish data: ${this._lowestDepth}`;
    }
}
