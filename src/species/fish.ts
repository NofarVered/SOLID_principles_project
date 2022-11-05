class Fish extends Animal {
    constructor(
      protected _name: string,
      protected _type: string, 
      protected _food: Food,
      protected _lowestDepth: number,
    ) {
      super(_name, _food, _type);
    }
    
    toString(): string {
      return `Animal data:\n ${super.toString()} \n Fish data: ${
        this._lowestDepth
      }`;
    }
  }
  