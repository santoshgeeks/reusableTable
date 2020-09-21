import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Products = [
    {position: 1, name: 'Hydrogen'},
    {position: 2, name: 'Helium'},
    {position: 3, name: 'Lithium'},
    {position: 4, name: 'Beryllium'},
    {position: 5, name: 'Boron'},
    {position: 6, name: 'Carbon'},
    {position: 7, name: 'Nitrogen'},
    {position: 8, name: 'Oxygen'},
    {position: 9, name: 'Fluorine'},
    {position: 10, name: 'Neon'},
  ];
 
  productHeader: string[] = ['position', 'name'];
  constructor() { }

  ngOnInit(): void {
  }

}
