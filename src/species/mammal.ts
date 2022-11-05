class Mammal extends Animal {
    constructor(
      protected _name: string,
      protected _type: string, 
      protected _food: Food,
      protected _durationOfPregnancy: number,
    ) {
      super(_name, _food, _type);
    }
    public get durationOfPregnancy(): number{
      return this._durationOfPregnancy;
    }
    toString(): string {
      return `Animal data:\n ${super.toString()} \n Mammal data: ${
        this._durationOfPregnancy
      }`;
    }
  }