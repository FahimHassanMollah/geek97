import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive form';
  loginForm : FormGroup;
  constructor(){
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required,Validators.minLength(4)]),
    })
  }
  login(){
    console.log(this.loginForm);
    console.log(this.loginForm.get('email')?.hasError);


  }
  ngOnInit(){

  }

}
