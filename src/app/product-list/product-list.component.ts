import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private router: Router,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.dataArray = this.dataService.data;
  }
  dataArray: any = [];
  displayedColumns: string[] = [
    'sno',
    'product',
    'price',
    'brand',
    'seller',
    'phn',
    'add',
    'individual-product',
  ];
  reDirectToCart(data: any) {
    this.cartService.cartData.push(data);
    this.router.navigate(['cart']);
  }
  reDirectToProduct(data: any) {
    this.cartService.individualData.push(data);
    this.router.navigate(['product']);
  }
}
