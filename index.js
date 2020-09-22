// Your code here

class Polygon {

    constructor(countSides){
      this._countSides = countSides;
    }

    get countSides(){
      return this._countSides = (this._countSides).length
    }

    get perimeter() {
      return this._countSides = this._countSides.reduce((acc,element) =>acc+element)
    }

}



class Triangle  extends Polygon {

    get isValid()
    {
      return  this. _countSides == 3 ? true:false
    }

  }



  class Square  extends Polygon {

    get isValid()
    {
      return  this. _countSides == 4 ? true:false
    }


    }
