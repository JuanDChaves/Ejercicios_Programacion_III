class FiguraGeometrica {
  #superficie;
  #perimetro;
  
  constructor() {
    this.#superficie = 0;
    this.#perimetro = 0;
  }
  
  #calcularDatos() {
    throw new Error("El método calcularDatos debe ser implementado en las clases derivadas");
  }
  
  dibujar() {
    return "La figura base no tiene representación visual";
  }
  
  toString() {
    return `Figura Geométrica:
    - Superficie: ${this.#superficie}
    - Perímetro: ${this.#perimetro}`;
  }
  
  getSuperficie() {
    return this.#superficie;
  }
  
  getPerimetro() {
    return this.#perimetro;
  }
  
  setSuperficie(superficie) {
    this.#superficie = superficie;
  }
  
  setPerimetro(perimetro) {
    this.#perimetro = perimetro;
  }
}

class Triangulo extends FiguraGeometrica {
  _base;
  _altura;
  
  constructor(base, altura) {
    super();
    this._base = base;
    this._altura = altura;
    this.#calcularDatos();
  }
  
  // Implementación del método protegido para calcular datos
  #calcularDatos() {
    this.setPerimetro(this._base * 3);
    this.setSuperficie((this._base * this._altura) / 2);
  }
  
  // Sobrescribimos el método dibujar
  dibujar() {
    let figura = '';
    const altura = Math.floor(this._altura);
    
    for (let i = 1; i <= altura; i++) {
      const asteriscos = Math.ceil((i / altura) * this._base);
      const espacios = Math.floor((this._base - asteriscos) / 2);
      
      figura += ' '.repeat(espacios) + '*'.repeat(asteriscos) + '\n';
    }
    
    return figura;
  }
  
  toString() {
    return `Triangulo:
    - Base: ${this._base}
    - Altura: ${this._altura}
    - Perímetro: ${this.getPerimetro()}
    - Superficie: ${this.getSuperficie()}`;
  }
}

class Rectangulo extends FiguraGeometrica {
  _ladoUno;
  _ladoDos;
  
  constructor(ladoUno, ladoDos) {
    super();
    this._ladoUno = ladoUno;
    this._ladoDos = ladoDos;
    this.#calcularDatos();
  }
  
  #calcularDatos() {
    this.setPerimetro(2 * (this._ladoUno + this._ladoDos));
    this.setSuperficie(this._ladoUno * this._ladoDos);
  }
  
  dibujar() {
    let figura = '';
    for (let i = 0; i < this._ladoUno; i++) {
      figura += '*'.repeat(this._ladoDos) + '\n';
    }
    return figura;
  }
  
  toString() {
    return `Rectángulo:
    - Lado 1: ${this._ladoUno}
    - Lado 2: ${this._ladoDos}
    - Perímetro: ${this.getPerimetro()}
    - Superficie: ${this.getSuperficie()}`;
  }
}


function test() {
  
  const triangulo = new Triangulo(6, 4);
  const rectangulo = new Rectangulo(6, 5);
  
  console.log(triangulo.toString());
  console.log("\nDibujo del triángulo:");
  console.log(triangulo.dibujar());
  
  console.log(rectangulo.toString());
  console.log("\nDibujo del rectángulo:");
  console.log(rectangulo.dibujar());
}

test();