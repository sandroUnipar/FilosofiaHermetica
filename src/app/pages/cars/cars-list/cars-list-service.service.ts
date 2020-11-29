import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';
import { Car } from '../entity/car.entity';

@Injectable({
  providedIn: 'root'
})
export class CarsListTableService extends AbstractTableData {
  getData() {

    var a = new Car("1", 'volkswagen', 'Golf Sportline 2011', 'ABC-0123', 33250, 'Branco');
    var b = new Car("2", 'volkswagen', 'Golf Generation 2003', 'ABB-7894', 33250, 'Preto');
    var c = new Car("3", 'Hyundai ', 'HB20 2019', 'EDD-1123', 42500, 'Azul');
    var d = new Car("4", 'Renault', 'Duster 1,6 16V 2017', 'ALD-4232', 54800, 'Branco');
    var e = new Car("5", 'Toyota', 'Corolla 2.0 2016', 'FDA-7898', 76900, 'Cinza');
    
    return [
      // var car = new Car();

      { sku: a.sku, marca: a.marca, modelo: a.modelo, placa: a.placa, valorFipe: a.valorFipe, cor: a.cor },
      { sku: b.sku, marca: b.marca, modelo: b.modelo, placa: b.placa, valorFipe: b.valorFipe, cor: b.cor },
      { sku: c.sku, marca: c.marca, modelo: c.modelo, placa: c.placa, valorFipe: c.valorFipe, cor: c.cor },
      { sku: d.sku, marca: d.marca, modelo: d.modelo, placa: d.placa, valorFipe: d.valorFipe, cor: d.cor },
      { sku: e.sku, marca: e.marca, modelo: e.modelo, placa: e.placa, valorFipe: e.valorFipe, cor: e.cor }
    ];
  }

  getColumns() {
    return {
      sku: {
        title: 'SKU',
        type: 'string',
        filter: true,
        width: '10%',
      },
      marca: {
        title: 'Marca',
        type: 'string',
        filter: true,
        width: '15%',
      },
      modelo: {
        title: 'Modelo',
        type: 'string',
        filter: true,
        width: '20%',
      },
      placa: {
        title: 'Placa',
        type: 'string',
        filter: true,
        width: '10%',
      },
      valorFipe: {
        title: 'Valor-Fipe',
        type: 'number',
        filter: true,
        width: '10%',
      },
      cor: {
        title: 'Cor',
        type: 'string',
        filter: true,
        width: '10%',
      },
    }
  };
}
