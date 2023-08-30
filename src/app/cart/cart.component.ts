import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    this.cartData = this.cartService.cartData;
  }
  cartData: any = [];
  displayedColumns: string[] = [
    'sno',
    'product',
    'price',
    'brand',
    'seller',
    'phn',
  ];
  reDirectToProductList() {
    this.router.navigate(['product-list']);
  }
  onSubmit() {
    alert('Submitted Sucessfully 😊😊');
    this.router.navigate(['product-list']);
    this.cartService.cartData = [];
  }
}
