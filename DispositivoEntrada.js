class DispositivoEntrada{ // clase padre
    constructor(tipoEntrada, marca){ 
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    //getters y setters
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca= marca;
    }
}


class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){ // al ser un atributo de lectura añadimos sólo get y no set
        return this._idRaton;
    }

    toString(){
        return `Raton: ${this._idRaton},tipo Entrada ${this._tipoEntrada}, marca ${this._marca}`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: ${this._tipoEntrada},tipo Entrada ${this._tipoEntrada}, marca ${this._marca}`;
    }
}

class Monitor{
    static ContadorMonitores = 0

    constructor(marca,tamaño){
        this._idMonitor = ++Monitor.ContadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `Monitor ${this._idMonitor}, marca  ${this._marca}, tamaño ${this._tamaño}`
    }
}

class Ordenador{ //agregación , no herencia
    static contadorPC =0;
    constructor(nombre,monitor,raton,teclado){
        this._idPC = ++Ordenador.contadorPC;
         this._nombre = nombre;
         this._raton = raton;
         this._monitor  = monitor;
         this._teclado = teclado;
    }
    toString(){
        return `Ordenador ${this._idPC}: ${this._nombre} \n ${this._monitor}\n ${this._raton} \n ${this._teclado}`
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrdem = ++Orden.contadorOrdenes;
        this._ordenadores = []; //array vacío
    }
    get idOrden(){
        return this._idOrdem;

    }
    agregarOrdenadores(ordenador){ //pasamos la referencia del objeto ordenador y se asigna a un nuevo elemento (this._ordenadores)
        this._ordenadores.push(ordenador);
    }
    mostrarOrden(){
        let ordenadoresOrden = ``;
        for (let ordenador of this._ordenadores){
            ordenadoresOrden += `\n${ordenador}`;
        }

        console.log(`Orden ${this._idOrdem}, ordenadores ${ordenadoresOrden}`)
    }
}




console.log(`------------variables para Raton1-----------------`)
//declaramos variables para Raton
let raton1 = new Raton("usb","ASUS");
console.log(raton1.toString())

console.log(`------------variables para Raton2-----------------`)

let raton2 = new Raton("bluetooh","DELL");
raton2.marca = "HP";
console.log(raton2.toString())

console.log(`-----------variables para teclado1------------------`)

//declaramos variables para teclado
let teclado1 = new Teclado("inalambrico","MSI")
console.log(teclado1.toString())

console.log(`-----------variables para teclado1------------------`)

let teclado2 = new Teclado("USB","ACER")
console.log(teclado2.toString())


console.log(`------------- variables para Monitor----------------`)
//declaramos variables para Monitor(No posee herencia)
let Monitor1 = new Monitor("HP","15 pulgadas")
console.log(Monitor1.toString())


console.log(`--------variables antes declaradas(agregacion)--------------`)

//agregación de las variables antes declaradas
let ordenador1 = new Ordenador('hp',Monitor1, raton1, teclado1)
console.log(ordenador1.toString())
console.log(`${ordenador1}`)

let ordenador2 = new Ordenador('hp',Monitor1, raton1, teclado1)
console.log(ordenador2.toString())
console.log(`${ordenador2}`)



console.log(`--------Clase orden--------------`)
let orden1 = new Orden();
orden1.agregarOrdenadores(ordenador1)
orden1.agregarOrdenadores(ordenador2)
orden1.mostrarOrden();