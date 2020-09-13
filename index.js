class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
      }
    
      get perimeter() {
        const sum = (total, side) => { return total + side };
        return this.sides.reduce(sum);
      }
    }
    
    class Triangle extends Polygon {
      get isValid() {
        const [s1, s2, s3] = this.sides;
        return s1 < s2 + s3 && s2 < s3 + s1 && s3 < s1 + s2 ? true : false;
      }
    }
    
    class Square extends Polygon {
      get isValid() {
        const [s1, s2, s3, s4] = this.sides;
        return s1 === s2 && s1 === s3 && s1 === s4 ? true : false;
      }
    
      get area() {
        const side = this.sides[0];
        return side ** 2;
      }
    }