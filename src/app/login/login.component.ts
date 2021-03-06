import { Component, OnInit } from '@angular/core';
import { User } from '../structures/user';
import { UsersService } from '../services/users.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User[] = [];
  loginForm: FormGroup;
  submitted = false;
  constructor(private usersService: UsersService,
  private fb: FormBuilder) { }
   

  ngOnInit() {
    this.createForm();
 }

 // convenience getter for easy access to form fields
 get f() { return this.loginForm.controls; }

 createForm() {
  this.loginForm = this.fb.group({
     email: new FormControl("",  Validators.required ),
     password: new FormControl("",  Validators.required ),
     checked: new FormControl("false"),
   });
 }

 get email() { return this.loginForm.get('email'); }
 get password() { return this.loginForm.get('password'); }
 get checked() { return this.loginForm.get('checked'); }

 authUser(value) {
  //console.log(value.checked)
  this.submitted = true;
  // stop here if form is invalid
  if (this.loginForm.invalid) {
    return;
  }
  
  const id = 0;
  const name = "";
  const surname= "";
  const password= value.password;
  const age= "";
  const address= "";
  const city= "";
  const email= value.email;
  const country= "";
  const postalcode= "";
  const confirmed= 0;
  const verifycode= "";
  const regdate= "";
  var Keeploged
  console.log(value.checked) 
  if (value.checked)
  {Keeploged= 1;} else 
  {Keeploged= 0;}

     console.log(value.checked)   
   const user: User = {id,name,surname,password,age,address, city,email,country,postalcode,confirmed,verifycode,regdate,Keeploged};
  if (!user) { return; }
  console.log(user);
  this.usersService.authUser(user)
    .subscribe(user => {
      console.log("resp",user);
      this.user.push(user);
    },error => { 
     console.log("error",error)
    })
      }
}
