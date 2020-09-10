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

//The sum of the lengths of any two sides of a triangle is greater than the length of the third side. 
//If you take the three sides of a triangle and add them in pairs, the sum is greater than (not equal to) the third side. 
// If that is not true, then it is not possible to construct a triangle with the given side lengths.
// 1 2 > 3 // 1 3 > 2 // 2 3 > 1 

class Triangle extends Polygon{
    get isValid() {
        if (this.countSides === 3) {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            return ((side1 + side2) > side3) && ((side1 + side3) > side2) && ((side2 + side3) > side1)
        }
    }
}

//A square is valid when the lengths of all sides are equal.
// area of a square: A = a^2
class Square extends Polygon{
    get isValid() {
        if (this.countSides === 4) {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            let side4 = this.sides[3]
            return (side1 === side2 && side2 === side3 && side3 === side4)
        }
    }

    get area() {
        return (this.sides[1]**2)
    }
}