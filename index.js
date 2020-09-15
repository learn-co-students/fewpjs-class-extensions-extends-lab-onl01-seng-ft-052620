// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((total, side) => {return total + side}, 0)
    }
}


class Triangle extends Polygon{
    get isValid(){
        let sides = this.sides
        let valid = true
        
        
        if((sides[0] + sides[1]) <= sides[2]){
            valid = false
        }
        else if((sides[1] + sides[2]) <= sides[0]){
            valid = false
        }
        else if((sides[0] + sides[2]) <= sides[1]){
            valid = false
        }
        return valid
    }
}

class Square extends Polygon{
    get isValid(){
        let result = true
        let check = this.sides[0]
        this.sides.forEach(side => {
            if (side !== check){
                result = false;
            }
        });
        return result
    }

    get area(){
        return this.sides[0]**2
    }
}