import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  public vm = {
    filterByText: '',
    location_id: 0,
    productsCopy: [],
    products: [],
    errorAmountApplied: false,
    item: {
      amount: 0
    },
    amountAppliedToDocuments: 0,
    amountInExcess: 0
  }

  flag = false;

  constructor() { 

  }

  ngOnInit(): void {

  }

  filterTours() {
    if (this.vm.filterByText || this.vm.location_id) {
        var productsFiltered = [];
        var copy = Object.assign([], this.vm.productsCopy)
        var productsCopy = copy;

        productsCopy.forEach((tour) => {
            if ((this.vm.filterByText && this.vm.filterByText !== '') || 
                (this.vm.location_id && tour.location_id === this.vm.location_id)) {
                var item: any = '';
                var itemFound = false;
                var res;

                if (this.vm.filterByText && this.vm.filterByText !== '') {
                    res = this.searchToursNamesByText(tour, this.flag);
                    if (res.tour_options.length > 0) {
                        item = res;
                        itemFound = true;
                    }
                }

                if (!res) {
                    item = tour;
                }

                if (this.vm.location_id) {
                    itemFound = false;

                    if (this.vm.location_id === item.location_id) {
                        itemFound = true;
                    }
                }
                
                if (itemFound) {
                    productsFiltered.push(item);
                }
            }
        });

        this.vm.products = productsFiltered;
    } else {
      this.vm.products = this.vm.productsCopy;
    }
  }

  searchToursNamesByText(tour, flag){
    if (flag) return {tour_options:[]}
    else {
      return {tour_options:[tour.nombre]};
    }
  }

  validateAmounts() {
    this.vm.errorAmountApplied = false;

    if (this.vm.item.amount < this.vm.amountAppliedToDocuments) {
      this.vm.errorAmountApplied = true;
    }

    this.vm.amountInExcess = 0;
    if (!this.vm.errorAmountApplied && this.vm.item.amount > this.vm.amountAppliedToDocuments) {
      this.vm.amountInExcess = this.vm.item.amount - this.vm.amountAppliedToDocuments;
    }
  }

}
