class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
         return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce(function(acc, side) {
            return acc + side
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return false;
        return ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[2] + this.sides[0] > this.sides[1]))
    }
}

class Square extends Polygon {
    get isValid() {
        let sideLength = this.sides[0];
        if (this.countSides !== 4) return false;
        return this.sides.every(side => (side === sideLength))
    }

    get area() {
        if (!this.isValid) {
            return false;
        } else {
            return this.sides[0] * this.sides[1];
        }
    }
}