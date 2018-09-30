import { Component, OnInit } from '@angular/core';

import { Router }      from '@angular/router';
import { AuthService } from '../services/auth.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../shared/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  
  model = new Login('', '');
  modelKeys = Object.keys(this.model);
  form: FormGroup;
  formControls = {};
  
  noSpecialChars(c: FormControl) {
    let REGEXP = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

    return REGEXP.test(c.value) ? {
        validate: {
        valid: false
        }
    } : null;
  }

  constructor(public authService: AuthService, public router: Router) { 
    this.modelKeys.forEach( (key) => {
      let validators = [];
      validators.push(Validators.required);
      
      if (key === 'username') {
        validators.push(this.noSpecialChars);
      }
      
      if (key === 'password') {
        validators.push(Validators.minLength(8));
        validators.push(Validators.maxLength(12));
      }
      
      this.formControls[key] = new FormControl(this.model[key], validators);
    });
    this.form = new FormGroup(this.formControls);
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  
  login() {
    this.message = 'Trying to log in ...';
 
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';
 
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }
  
  logout() {
    this.authService.logout();
    this.setMessage();
  }
  
  sendLogin() {
    this.modelKeys.forEach( (elem) => {
      console.log(this.form.value[elem]);
    });
  }
  
}
