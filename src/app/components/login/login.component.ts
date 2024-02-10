import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{

  formdata={
    username:'',
    password:''
  }

onSubmit(form:NgForm)
{
  if(form.valid)
  {
    alert(this.formdata.username);
  }
}
  hide:boolean = true;

  
}
