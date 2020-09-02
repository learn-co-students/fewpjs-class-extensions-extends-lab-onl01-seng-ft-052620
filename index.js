class Polygon{
  constructor(intAry){
    this._sides = intAry;
  }

  get sides(){
    return this._sides;
  }

  get countSides(){
    return this._sides.length;
  }

  get perimeter(){
    return this._sides.reduce((memo, side)=>memo+side);
  }
}

class Triangle extends Polygon{
  get isValid(){
    if (this.countSides !== 3){
      return false;
    }
    const combinations = [[0,1,2],[0,2,1],[1,2,0]]
    return combinations.every((sidesCombo)=>{
      return this.sides[sidesCombo[0]] + this.sides[sidesCombo[1]] > this.sides[sidesCombo[2]]
    });
  }
}

class Square extends Polygon{
  get isValid(){
    if (this.countSides !==4){
      return false;
    }
    return this.sides.every((side)=>side===this.sides[0]);
  }

  get area(){
    return this.sides[0]**2
  }
}