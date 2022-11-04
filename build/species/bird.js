"use strict";
class Birds extends Animal {
    constructor(_name, _food, _wingSpan) {
        super(_name, _food);
        this._name = _name;
        this._food = _food;
        this._wingSpan = _wingSpan;
    }
    toString() {
        return `Bird Data: \n ${super.toString()} \n Wing Span: ${this._wingSpan}`;
    }
}
