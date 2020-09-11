// Your code here


class Polygon{
    constructor(sides){
        this.sides = sides

    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        let per = 0
     this.sides.forEach(len => per += len )
        return per
    }
    


    
}
class Square extends Polygon{

    get area() {
        return this.sides[0] * this.sides[1]
    }

    get isValid() {
        console.log(this.sides)
        if ((this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]) && (this.sides[2] === this.sides[3]) && (this.sides[3] === this.sides[0])) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Triangle extends Polygon{
    get isValid() {
        if ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[0] + this.sides[2] > this.sides[1])) {
            return true
        }
        else {
            return false
        }
    }


}