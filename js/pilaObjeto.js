class Pila{
    constructor(){
        this.pila = {};
        this.contador = 0;
    }

    push(elemento){
        this.pila[this.contador] = elemento;
        this.contador++;
        return this.pila;
    }
    pop(){
        if (this.contador > 0){
        let a = this.pila[this.contador-1];
        delete this.pila[this.contador-1];
        this.contador--;
        return a;
        }
        else if(this.contador === 0){
            console.log("no hay datos para eliminar");
        }
    }

    peek(){
        return this.pila[this.contador - 1];
    }
    
    size(){
        return this.contador;
    }

    print(){
        if (this.contador > 0){
            console.log(this.pila);
        }
        else if (this.contador === 0){
            console.log("no hay datos para mostrar");
        }
    }
}

let miPila = new Pila(); 