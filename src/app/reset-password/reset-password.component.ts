import { Component, OnInit } from '@angular/core';
import { User } from '../structures/user';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  user: User[] = [];
  resetForm: FormGroup;
  submitted = false;
  active = true;
  constructor(private usersService: UsersService,
  private fb: FormBuilder,
  private location: Location) { }

  ngOnInit() {
    this.createForm();
  }


 // convenience getter for easy access to form fields
 get f() { return this.resetForm.controls; }

 createForm() {
  this.resetForm = this.fb.group({
     email: new FormControl("",  [Validators.required, Validators.email] ),
   });
 }

 get email() { return this.resetForm.get('email'); }

 resetUser(value) {
  //console.log(value.checked)
  this.submitted = true;
  // stop here if form is invalid
  if (this.resetForm.invalid) {
    return;
  }
  
  const id = 0;
  const name = "";
  const surname= "";
  const password= "";
  const age= "";
  const address= "";
  const city= "";
  const email= value.email;
  const country= "";
  const postalcode= "";
  const confirmed= 0;
  const verifycode= "";
  const regdate= "";
  const Keeploged=0;
 
        
   const user: User = {id,name,surname,password,age,address, city,email,country,postalcode,confirmed,verifycode,regdate,Keeploged};
  if (!user) { return; }
  //console.log(user);
  this.usersService.resetUser(user)
    .subscribe(user => {
      //console.log("resp",user);
      this.user.push(user);
      this.resetForm.disable()
    },error => { 
     console.log("error",error)
    })
      }


      goBack(): void {
        this.location.back();
      }
}
