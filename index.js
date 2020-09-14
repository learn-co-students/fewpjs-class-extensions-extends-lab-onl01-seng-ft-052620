class Polygon {
    constructor(sideLengths) {
        this.sideLengths = sideLengths
        this.count = this.sideLengths.length
    }
    get countSides() {
        return this.sideLengths.length
      }
    get perimeter() {
        return this.sideLengths.reduce( function(total, e) {
            return total + e
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (!Array.isArray(this.sideLengths)) return;
        if (this.count !== 3) return;
        let side1 = this.sideLengths[0]
        let side2 = this.sideLengths[1]
        let side3 = this.sideLengths[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
      }
}

class Square extends Polygon {
    get isValid() {
        if (!Array.isArray(this.sideLengths)) return;
        if (this.count !== 4) return;
        let side1 = this.sideLengths[0]
        let side2 = this.sideLengths[1]
        let side3 = this.sideLengths[2]
        let side4 = this.sideLengths[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))      }

    get area() {
        return this.sideLengths[0] * this.sideLengths[0]
    }
}

