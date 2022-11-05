abstract class Animal {    
    constructor(protected _name: string, protected _food: Food, protected _type: string, 
      ) {}
    public get food ():Food{
      return this._food;
    }
    public feedMe(currentQuantity: number): string {
      const newQuantity = this._food.dailyQuantity-currentQuantity;
      this._food.dailyQuantity=newQuantity;
      return `The quantity now is ${this._food.dailyQuantity}`;
    }
    
    public NewSupply(supply: number): string{
      const newQuantity = this._food.dailyQuantity+supply;
      this._food.dailyQuantity=newQuantity;
      return `The quantity now is ${this._food.dailyQuantity}`;
    }
    
    public toString(): string {
      return ` ${this._name} , ${this._type},  ${this._food}`;
    }
  }