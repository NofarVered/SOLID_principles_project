class Food {
    constructor(private _foodType: string, private _dailyQuantity: number) {}
  
    public get foodType(): string {
      return this._foodType;
    }
  
    public get dailyQuantity(): number {
      return this._dailyQuantity;
    }

    public set dailyQuantity(currentQuantity: number) {
      this._dailyQuantity=currentQuantity;
    }
  
    public toString(): string {
      return `Food data: ${this._dailyQuantity} , ${this._foodType} \n`;
    }
  }