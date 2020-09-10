// Your code here
class Polygon {

    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return (this.sides).length
    }

    get perimeter() {
        return (this.sides).reduce(function(total, element){ return element + total }, 0)
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        let sideOne = this.sides[0]
        let sideTwo = this.sides[1]
        let sideThree = this.sides[2]
        if ((sideOne + sideTwo) > sideThree && (sideTwo + sideThree) > sideOne && (sideOne + sideThree) > sideTwo) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2] && this.sides[2] == this.sides[3]) {
            return true
        } else {
            return false
        }
    }

    get area() {
        if (this.isValid == true) {
            return (this.sides[0] * this.sides[0])
        } else {
            return false
        }
    }
}