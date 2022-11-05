"use strict";
class Bird extends Animal {
    constructor(_name, _type, _food, _wingSpan) {
        super(_name, _food, _type);
        this._name = _name;
        this._type = _type;
        this._food = _food;
        this._wingSpan = _wingSpan;
    }
    get wingSpan() {
        return this._wingSpan;
    }
    toString() {
        return `Animal data:\n ${super.toString()} \n Bird data: ${this._wingSpan}`;
    }
}
