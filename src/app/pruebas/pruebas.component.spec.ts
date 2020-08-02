import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebasComponent } from './pruebas.component';
import { V4MAPPED } from 'dns';

describe('PruebasComponent', () => {

  let service: PruebasComponent;
  let tour = {
    nombre: '',
    location_id: 0
  }

  beforeEach(() => {
    service = new PruebasComponent();
    service.vm = {
      filterByText: null,
      location_id: null,
      productsCopy: [],
      products: [],
      errorAmountApplied: false,
      item: {
        amount: 0
      },
      amountAppliedToDocuments: 0,
      amountInExcess: 0
    }
    tour = {
      nombre: null,
      location_id: null
    },
    service.flag = false;
  }); 
  
  describe('Funcion FilterTours', function () {

    it('Caso de prueba #1', () => {
      service.vm.filterByText = "Text";
      service.vm.location_id = 3;
      tour = {
        nombre: "Tour 1",
        location_id: 3
      } 
      service.vm.productsCopy.push(tour);
      expect(service.filterTours()).not.toThrow;
    });

    it('Caso de prueba #2', () => {
      expect(service.filterTours()).not.toThrow;
    });

   });

   describe('Funcion ValidateAmounts', function () {

    it('Caso de prueba #3', () => {
      service.vm.item.amount = 0;
      service.vm.amountAppliedToDocuments = 1;
      expect(service.validateAmounts()).not.toThrow;
    });

    it('Caso de prueba #4', () => {
      service.vm.item.amount = 1;
      service.vm.amountAppliedToDocuments = 0;
      expect(service.validateAmounts()).not.toThrow;
    });

    it('Caso de prueba #5', () => {
      service.vm.item.amount = 1;
      service.vm.amountAppliedToDocuments = 1;
      expect(service.validateAmounts()).not.toThrow;
    });

   });
});
