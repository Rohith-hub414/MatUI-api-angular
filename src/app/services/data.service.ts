import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  data = [
    {
      product: 'mobile',
      price: '$10,00',
      brand: 'oneplus',
      seller: 'xyz',
      phn: 12365478,
    },
    {
      product: 'oven',
      price: '$300',
      brand: 'samsung',
      seller: 'xyz',
      phn: 12365478,
    },
    {
      product: 'T.V',
      price: '$4,000',
      brand: 'sony',
      seller: 'xyz',
      phn: 12365478,
    },
    {
      product: 'A.C',
      price: '$2,000',
      brand: 'bluestar',
      seller: 'xyz',
      phn: 12365478,
    },
    {
      product: 'Washing Machine',
      price: '$1,000',
      brand: 'samsung',
      seller: 'xyz',
      phn: 12365478,
    },
  ];
  loginData: any = [];
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
