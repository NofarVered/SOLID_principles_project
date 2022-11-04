"use strict";
class Fish extends Animal {
    constructor(_name, _food, _lowestDepth) {
        super(_name, _food);
        this._name = _name;
        this._food = _food;
        this._lowestDepth = _lowestDepth;
    }
    toString() {
        return `Fish Data: \n ${super.toString()} \n Lowest Depth: ${this._lowestDepth}`;
    }
}
