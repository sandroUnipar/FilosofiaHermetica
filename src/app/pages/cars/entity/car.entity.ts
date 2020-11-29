export class Car {
    
    sku: String;
    marca: String;
    modelo: String;
    placa: String;
    valorFipe: number;
    cor: String;

    constructor(sku: String, marca: String, modelo: String, placa: String, valorFipe: number, cor: String){
        this.sku = sku;
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.valorFipe = valorFipe;
        this.cor = cor;
    }
}