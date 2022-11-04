"use strict";
class Birds extends Animal {
    constructor(_name, _food, _wingSpan, _type) {
        super(_name, _food, _type);
        this._name = _name;
        this._food = _food;
        this._wingSpan = _wingSpan;
        this._type = _type;
    }
    toString() {
        return `Animal data:\n ${super.toString()} \n Bird data: ${this._wingSpan}`;
    }
}
