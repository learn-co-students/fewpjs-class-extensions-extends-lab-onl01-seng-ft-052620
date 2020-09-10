// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let [a, b, c] = this.sides
        return a + b > c && a + c > b && b + c > a
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.countSides === 4) {
            return this.sides[0] === this.sides[1]
                && this.sides[0] === this.sides[2]
                && this.sides[0] === this.sides[3]
        }
    }

    get area() {
        if(this.isValid) return this.sides[0] ** 2
    }
}