import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, private dataService: DataService) {}

  onSubmit(formVal: any) {
    console.log(formVal.value);
    this.dataService.loginData.push(formVal.value);
    alert('Registered Sucessfully 😊😊');
    this.router.navigate(['login']);
  }
}
