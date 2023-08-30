import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  data: any;
  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.data = this.cartService.individualData;
    console.log(this.data);
  }
}
