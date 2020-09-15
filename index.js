class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((acc, c) => acc + c, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const side1 = this.sides[0]
        const side2 = this.sides[1]
        const side3 = this.sides[2]
        if (this.countSides === 3 && (side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4 && [...new Set(this.sides)].length === 1) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sides[0]**2
    }
}