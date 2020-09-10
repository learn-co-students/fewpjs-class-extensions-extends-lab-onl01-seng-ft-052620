// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        const reducer = (acc, curr) => acc + curr
        return this.sides.reduce(reducer)
    }

}

class Triangle extends Polygon{
    get isValid() {
        if (this.countSides === 3) {
            
        }
    }
}