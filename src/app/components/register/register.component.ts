import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
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
