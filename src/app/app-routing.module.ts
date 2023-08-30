import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'users', component: UsersComponent },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
