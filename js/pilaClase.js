class pila {
    constructor() {
        this.pila = [];
    }

    //Metodos

    //Agrega un elemento al final de la pila
    push(elemento) {
            this.pila.push(elemento);
            return this.pila[this.pila.length - 1]
        }

    
    pop() {
            return this.pila.pop();
        }

    peek() {
        return this.pila[this.pila.length - 1]
    }

    size() {
        return this.pila.length;
    }


    print() {
        return this.pila;
    }
}