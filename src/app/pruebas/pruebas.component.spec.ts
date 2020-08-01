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

    it('Caso de prueba #21', () => {
      service.vm.filterByText = "Text";
      service.vm.location_id = 3;
      tour = {
        nombre: "Tour 1",
        location_id: 3
      } 
      service.vm.productsCopy.push(tour);
      expect(service.filterTours()).not.toThrow;
    });

    it('Caso de prueba #28', () => {
      service.vm.location_id = 28;
      tour = {
        nombre: "Tour 28",
        location_id: 28
      } 
      service.vm.productsCopy.push(tour);
      service.flag = true;
      expect(service.filterTours()).not.toThrow;
    });
//--------------------------
    it('Caso de prueba #29', () => {
      service.vm.location_id = 0;
        tour = {
          nombre: "Tour 29",
          location_id: 29
        } 
        service.vm.productsCopy.push(tour);
      expect(service.filterTours()).not.toThrow;
    });

    it('Caso de prueba #30', () => {
      service.vm.location_id = 0;
        tour = {
          nombre: "Tour 30",
          location_id: 30
        } 
        service.vm.productsCopy.push(tour);
      expect(service.filterTours()).not.toThrow;
    });
//--------------------------
    it('Caso de prueba #31', () => {
      service.vm.location_id = 0;
        tour = {
          nombre: "Tour 30",
          location_id: 30
        } 
        service.vm.productsCopy.push(tour);
      expect(service.filterTours()).not.toThrow;
    });
    
    it('Caso de prueba #33', () => {
      service.vm.location_id = 0;
      expect(service.filterTours()).not.toThrow;
    });

    it('Caso de prueba #34', () => {
      expect(service.filterTours()).not.toThrow;
    });

    it('Caso de prueba #35', () => {
      service.vm.filterByText = 'Text';
      expect(service.filterTours()).not.toThrow;
    });

   });

   describe('Funcion ValidateAmounts', function () {

    it('Caso de prueba #38', () => {
      service.vm.item.amount = 0;
      service.vm.amountAppliedToDocuments = 1;
      expect(service.validateAmounts()).not.toThrow;
    });

    it('Caso de prueba #39', () => {
      service.vm.item.amount = 1;
      service.vm.amountAppliedToDocuments = 0;
      expect(service.validateAmounts()).not.toThrow;
    });

    it('Caso de prueba #40', () => {
      service.vm.item.amount = 1;
      service.vm.amountAppliedToDocuments = 1;
      expect(service.validateAmounts()).not.toThrow;
    });


   });
});
