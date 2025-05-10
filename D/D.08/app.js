
class Punto {
    _x
    _y

    getX() {
        return this._x
    }

    getY() {
        return this._y
    }
    constructor (x , y) {
        this._x = Number(x)
        this._y = Number(y)
    }
}

class Rectangulo {
    _vertice1
    _vertice2
    _vertice3
    _vertice4
    _area
    _perimetro
    _ladoUno
    _ladoDos

    constructor(vertice1, vertice3) {
        this._vertice1 = new Punto(vertice1[0], vertice1[1])
        this._vertice2 = new Punto(vertice3[0], vertice1[1])
        this._vertice3 = new Punto(vertice3[0], vertice3[1])
        this._vertice4 = new Punto(vertice1[0], vertice3[1])
        this._ladoUno = this._vertice2.getX() - this._vertice1.getX()
        this._ladoDos = this._vertice4.getY() - this._vertice2.getY()
    }

    
    getArea() {
        return this._ladoUno * this._ladoDos
    }

    getPerimetro() {
        return 2 * (this._ladoUno + this._ladoDos)
    }

    toString() {
        return `Vertice 1 = (${this._vertice1.getX()}, ${this._vertice1.getY()})` + 
        `Vertice 2 = (${this._vertice2.getX()}, ${this._vertice2.getY()})` + 
        `Vertice 3 = (${this._vertice3.getX()}, ${this._vertice3.getY()})` + 
        `Vertice 4 = (${this._vertice4.getX()}, ${this._vertice4.getY()})` + 
        `Lado 1 = ${this._ladoUno}` + 
        `Lado 2 = ${this._ladoDos}` + 
        `Area = ${this.getArea()}` + 
        `Perimetro = ${this.getPerimetro()}`  
    }
}

const miRectangulo = new Rectangulo([2, 3], [5, 8])