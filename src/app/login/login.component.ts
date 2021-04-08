import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // creo il form
    registrationForm = new FormGroup({
      // eseguo i controlli
      firstName: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
      country: new FormControl('', Validators.required),
      city: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z\s-]+[a-zA-Z]$')]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required), //Testing193!
    })

    get firstName() {
      return this.registrationForm.get('firstName');
  }

    get surname() {
      return this.registrationForm.get('surname');
  }

    get phone() {
      return this.registrationForm.get('phone');
  }
    
    get email() {
      return this.registrationForm.get('email');
  }

    get country() {
      return this.registrationForm.get('country');
  }

    get city() {
      return this.registrationForm.get('city');
  }

    get username() {
      return this.registrationForm.get('username');
  }

    get password() {
      return this.registrationForm.get('password');
  }
    
  constructor() { }

  ngOnInit(): void {
  }
    // al click sul bottone mi stampo i dati in console
    onFormSubmit(){
      //console.log('valore del formControl:' + this.utenteForm.get('nome form control'));
      /*
      console.log('FirstName:' + this.registrationForm.get('firstName').value);
      console.log('Surname:' + this.registrationForm.get('surname').value);
      console.log('Phone:' + this.registrationForm.get('phone').value);
      console.log('Email:' + this.registrationForm.get('email').value);
      console.log('Country:' + this.registrationForm.get('country').value);
      console.log('City:' + this.registrationForm.get('city').value);
      console.log('Username:' + this.registrationForm.get('username').value);
      console.log('Password:' + this.registrationForm.get('password').value);
      */
     
   }

}

export class FormFieldAppearanceExample {}
