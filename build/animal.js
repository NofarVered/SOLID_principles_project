"use strict";
class Animal {
    constructor(_name, _food) {
        this._name = _name;
        this._food = _food;
    }
    feedMe(currentQuantity) {
        const newQuantity = this._food.dailyQuantity - currentQuantity;
        this._food.dailyQuantity = newQuantity;
        return `The quantity now is ${this._food.dailyQuantity}`;
    }
    NewSupply(supply) {
        const newQuantity = this._food.dailyQuantity + supply;
        this._food.dailyQuantity = newQuantity;
        return `The quantity now is ${this._food.dailyQuantity}`;
    }
    toString() {
        return ` ${this._name} , ${this._food}`;
    }
}
