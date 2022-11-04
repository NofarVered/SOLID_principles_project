"use strict";
class Food {
    constructor(_type, _dailyQuantity) {
        this._type = _type;
        this._dailyQuantity = _dailyQuantity;
    }
    get type() {
        return this._type;
    }
    get dailyQuantity() {
        return this._dailyQuantity;
    }
    set dailyQuantity(currentQuantity) {
        this._dailyQuantity = currentQuantity;
    }
    toString() {
        return `Food data: ${this._dailyQuantity} , ${this._type} \n`;
    }
}
