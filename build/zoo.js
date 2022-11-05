"use strict";
class Zoo {
    constructor() {
        this.animals = [];
    }
    addAnimal(name, type, info) {
        switch (type) {
            case "Lion": {
                let food = new Food("meat", 6);
                this.animals.push(new Mammal(name, type, food, info));
                break;
            }
            case "Whale": {
                let food = new Food("plankton", 2000);
                this.animals.push(new Fish(name, type, food, info));
                break;
            }
            case "Goose": {
                let food = new Food("seeds", 1);
                this.animals.push(new Mammal(name, type, food, info));
                break;
            }
            case "SnowyOwl": {
                let food = new Food("worms", 100);
                this.animals.push(new Bird(name, type, food, info));
                break;
            }
            case "ClownFish": {
                let food = new Food("algae", 3);
                this.animals.push(new Fish(name, type, food, info));
                break;
            }
            default:
                console.log(`Animal type ${type} is not exists.`);
        }
    }
    initialAnimalsSupply(days) {
        for (let animal of this.animals) {
            let animalQuentity = animal.food.dailyQuantity * (days - 1);
            animal.NewSupply(animalQuentity);
        }
    }
    feedEveryone(days) {
        for (let animal of this.animals) {
            let feedQuentity = animal.food.dailyQuantity * (days);
            animal.feedMe(feedQuentity);
        }
    }
    toString() {
        let animalsStr = " ";
        for (let animal of this.animals) {
            animalsStr += `${animal.toString()} . \n`;
        }
        animalsStr += "\n . ";
        return animalsStr;
    }
}
