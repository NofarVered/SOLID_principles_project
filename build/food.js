"use strict";
class Food {
    constructor(_foodType, _dailyQuantity) {
        this._foodType = _foodType;
        this._dailyQuantity = _dailyQuantity;
    }
    get foodType() {
        return this._foodType;
    }
    get dailyQuantity() {
        return this._dailyQuantity;
    }
    set dailyQuantity(currentQuantity) {
        this._dailyQuantity = currentQuantity;
    }
    toString() {
        return `Food data: ${this._dailyQuantity} , ${this._foodType} \n`;
    }
}
