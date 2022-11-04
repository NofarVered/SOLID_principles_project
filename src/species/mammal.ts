class Mammal extends Animal {
    constructor(
      protected _name: string,
      protected _food: Food,
      protected _durationOfPregnancy: number,
      protected _type: string, 
    ) {
      super(_name, _food, _type);
    }
    
    toString(): string {
      return `Animal data:\n ${super.toString()} \n Mammal data: ${
        this._durationOfPregnancy
      }`;
    }
  }