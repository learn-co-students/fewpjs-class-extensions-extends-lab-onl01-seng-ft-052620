// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((acc,s) => acc+s,0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        let [s1,s2,s3] = this.sides
        return s1+s2>s3 && s1+s3>s2 && s2+s3>s1
    }
}

class Square extends Polygon {
    get isValid(){
        let [s1,s2,s3,s4] = this.sides
        return s1===s2 && s2===s3 && s3===s4
    }

    get area(){
        return this.sides[0] * this.sides[0]
    }
}
