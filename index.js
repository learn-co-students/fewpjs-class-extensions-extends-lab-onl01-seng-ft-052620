// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.sides.reduce(reducer, 0)
    }

}

class Triangle extends Polygon{
    get isValid(){
       if (this.countSides === 3) {
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
}
    }
}

class Square extends Polygon{
    get area(){
        if (this.isValid){
            return this.sides[0] ** 2
        }
    }

    get isValid(){
        if (this.countSides === 4) {
        return this.sides[0] === this.sides[1]
            && this.sides[0] === this.sides[2]
            && this.sides[0] === this.sides[3]
            
            }
    }

}