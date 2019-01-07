import { Component, OnInit } from '@angular/core';
import { User } from '../structures/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  user: User[] = [];
  newPassForm: FormGroup;
  submitted = false;
  id = 0
  code = ""
  constructor(private route: ActivatedRoute,
    private usersService: UsersService,
  private fb: FormBuilder,
  private location: Location) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.code = this.route.snapshot.paramMap.get('code');
    this.createForm();
  }


 // convenience getter for easy access to form fields
 get f() { return this.newPassForm.controls; }

 createForm() {
  this.newPassForm = this.fb.group({
     password: new FormControl("",  [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_`~=+{}"?/ ;:()<>.,|-]).{8,}')] ),
     confirmpassword: new FormControl("",  [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_`~=+{}"?/ ;:()<>.,|-]).{8,}')] )
   });
 }

 get password() { return this.newPassForm.get('password'); }
 get confirmpassword() { return this.newPassForm.get('confirmpassword'); }

 newPassword(value) {
  //console.log(value.checked)
  this.submitted = true;
  // stop here if form is invalid
  if (this.newPassForm.invalid) {
    return;
  }
  
  if (value.password != value.confirmpassword) {
    this.usersService.notifyUser("password Mismatch", 'top','center')
    return;
  }

  const id = 0;
  const name = "";
  const surname= "";
  const password= value.password;
  const age= "";
  const address= "";
  const city= "";
  const email= "";
  const country= "";
  const postalcode= "";
  const confirmed= 0;
  const verifycode= "";
  const regdate= "";
  const Keeploged=0;
 
  console.log(value.password)
        
   const user: User = {id,name,surname,password,age,address, city,email,country,postalcode,confirmed,verifycode,regdate,Keeploged};
  if (!user) { return; }
  //console.log(user);
  this.usersService.updatePass(user, this.id, this.code)
    .subscribe(user => {
      //console.log("resp",user);
     
      this.user.push(user);
    },error => { 
     console.log("error",error)
    })
      }


      goBack(): void {
        this.location.back();
      }

}
