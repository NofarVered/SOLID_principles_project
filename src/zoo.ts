class Zoo {
    private animals: Animal[];
    constructor() {
      this.animals = [];
    }
  
    public addAnimal(name: string, type: string, foodType:string, dailyQuantity: number, info: number) {
      switch (type) {
        case "Lion": {
          let food = new Food(foodType, dailyQuantity);
          this.animals.push(new Mammal(name, type, food, info));
          break;
        }
        case "Whale": {
          let food = new Food(foodType, dailyQuantity);
          this.animals.push(new Fish(name, type, food, info));
          break;
        }
        case "Goose": {
          let food = new Food(foodType, dailyQuantity);
          this.animals.push(new Mammal(name, type, food, info));
          break;
        }
        case "SnowyOwl": {
          let food = new Food(foodType, dailyQuantity);
          this.animals.push(new Bird(name, type, food, info));
          break;
        }
        case "ClownFish": {
          let food = new Food(foodType, dailyQuantity);
          this.animals.push(new Fish(name, type, food, info));
          break;
        }
        default:
          console.log(`Animal type ${type} is not exists.`);
      }
  
    }

    public initialEveryoneSupply(days: Number) {

    }
  
    public feedEveryone(days: Number) {

    }    
}

