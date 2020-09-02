class Polygon{

    constructor(arrayOfSides){
        this.arrayOfSides = arrayOfSides;
    }

    get countSides(){
        return this.arrayOfSides.length
    }

    get perimeter(){
        let total = 0
        this.arrayOfSides.forEach(el => {
            total += el
        });
        return total
    }
}

class Triangle extends Polygon{

    get isValid(){
        const [s1, s2, s3] = this.arrayOfSides
        if (s1 + s2 >= s3 && s1 + s3 >= s2 && s2 + s3 >= s1){
            return true
        } else {
            return false
        }
    }
    }

class Square extends Polygon{

    get isValid(){
        return this.arrayOfSides.every(side => side === this.arrayOfSides[0])
    }

    get area(){
        return this.arrayOfSides[0] * this.arrayOfSides[0]
    }
    
}