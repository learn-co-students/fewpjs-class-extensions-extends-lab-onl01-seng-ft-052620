// Your code here
class Polygon{
    constructor(dimensions){
        this.dimensions = dimensions;
    }

    get countSides(){
        return this.dimensions.length
    }

    get perimeter(){
        return this.dimensions.reduce((acc, curr) => {return acc + curr})
    }

    onlyUniqueSides(value, index, self){
        return self.indexOf(value) === index;
    }
}

class Triangle extends Polygon{
    get isValid(){
        //triangle check
        let side1 = this.dimensions[0]
        let side2 = this.dimensions[1]
        let side3 = this.dimensions[2]
        if ((side3>(side1+side2)) || (side2 >(side1+side3)) || (side1>(side2+side3)) || !(this.countSides === 3))
            return false;
        else 
            return true;
    }
}


class Square extends Polygon{
    get isValid(){
        let numberOfUniqueLenghts = 0
        numberOfUniqueLenghts = (this.dimensions.filter(this.onlyUniqueSides)).length
        if ((numberOfUniqueLenghts === 1) && (this.countSides === 4)){
            return true;
        }else{
            return false;
        }
    }

    get area(){
        if (this.isValid)
            return (this.dimensions[0] ** 2)
    }
    
}