function Cola(){
    this.tamaño = 0;
    this.primero = 0;
    this.cola = {};
}

Cola.prototype.enqueue = function(dato){
    this.cola[this.tamaño + this.primero] = dato;
    this.tamaño++;
    return dato;
}

Cola.prototype.dequeue = function(){
    if (this.tamaño > 0) {
        var dato = this.cola[this.primero];
        delete this.cola[this.primero];
        this.tamaño--;
        this.primero++;
        return dato;
    }
    else if (this.tamaño === 0){
        console.log("no hay datos para eliminar");
    }
}

Cola.prototype.peek = function(){
    return this.cola[this.primero];
}

Cola.prototype.size = function(){
    return this.tamaño;
}

Cola.prototype.print = function(){
    return this.cola;
}

let miCola = new Cola();