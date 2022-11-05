class Bird extends Animal {
    constructor(
      protected _name: string,
      protected _type: string, 
      protected _food: Food,
      protected _wingSpan: number,
    ) {
      super(_name, _food, _type);
    }
    
    toString(): string {
      return `Animal data:\n ${super.toString()} \n Bird data: ${
        this._wingSpan
      }`;
    }
  }
  