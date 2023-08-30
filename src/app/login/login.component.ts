import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataRowOutlet } from '@angular/cdk/table';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private dataService: DataService) {}

  reDirectToRegister() {
    this.router.navigate(['register']);
  }
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  onSubmit(formVal: any) {
    console.log(formVal.value);

    let loginData = this.dataService.loginData;
    if (loginData.length == 0) {
      alert('There are no users Register First 😑😑');
    }
    loginData.map((val: any) => {
      if (
        val.username == formVal.value.username &&
        val.password == formVal.value.password
      ) {
        alert('LoggedIn Sucessfully!!');
        this.router.navigate(['home']);
      } else {
        alert('Invalid Credentials!!');
      }
    });
  }
}
