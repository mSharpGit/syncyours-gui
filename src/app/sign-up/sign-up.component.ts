import { Component, OnInit } from '@angular/core';
import { User } from '../structures/user';
import { UsersService } from '../services/users.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { PasswordValidator } from '../password.validator';


@Component({
  providers:[],
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  countries = [ 'USA', 'Canada', 'Uk', 'Lebanon']
  user: User[] = [];
  signupForm: FormGroup;
  submitted = false;
 constructor(private usersService: UsersService,
  private fb: FormBuilder,
  private location: Location
  ) { }

  ngOnInit() {
    this.createForm();
   }
 
addUser(value) {
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.signupForm.invalid) {
    return;
  }
//console.log(value.password, value.confirmpassword)

  if (value.password != value.confirmpassword) {
    this.usersService.notifyUser("Passwords Do Not Match", 'top', 'center')
    return;
  }
  
  const id = 0;
  const name = value.name;
  const surname= value.surname;
  const password= value.password;
  //var options = { weekday: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric' };
  //const age= value.age.toLocaleDateString();
  const age= "";
  const address= value.address;
  const city= value.city;
  const email= value.email;
  const country= value.country;
  const postalcode= value.postalcode;
  const confirmed= 0;
  const verifycode= "";
  const regdate= "";
  const Keeploged= 0;
   const user: User = { id, name, surname, password, age, address, city, email,country,postalcode,confirmed,verifycode,regdate,Keeploged};
  if (!user) { return; }
  this.usersService.addUser(user)
    .subscribe(user => {
      this.user.push(user);
    }, 
    error => { 
     console.log("error",error)
    })
      }

 

 // convenience getter for easy access to form fields
 get f() { return this.signupForm.controls; }

 createForm() {
   this.signupForm = this.fb.group({
     name: new FormControl("",  Validators.required ),
     age: new FormControl(""),
     surname: new FormControl("",  Validators.required ),
    // surname: new FormControl("", [
       //Validators.required,
      // Validators.pattern('^[0-9]*$'),
       // ]),  ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}) --(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}--(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}
     password: new FormControl("",  [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_`~=+{}"?/ ;:()<>.,|-]).{8,}')]),
     //password: new FormControl("",  [PasswordValidator.strong]),
     confirmpassword: new FormControl("", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_`~=+{}"?/ ;:()<>.,|-]).{8,}')] ),
     email: new FormControl("",  [Validators.required,Validators.email] ),
     address: new FormControl(""),
     city: new FormControl("" ),
     country: new FormControl(""),
     postalcode: new FormControl("")
   });
 }
 
 get name() { return this.signupForm.get('name'); }
 get age() { return this.signupForm.get('age'); }
 get surname() { return this.signupForm.get('surname'); }
 get password() { return this.signupForm.get('password'); }
 get confirmpassword() { return this.signupForm.get('confirmpassword'); }
 get email() { return this.signupForm.get('email'); }
 get address() { return this.signupForm.get('address'); }
 get city() { return this.signupForm.get('city'); }
 get country() { return this.signupForm.get('country'); }
 get postalcode() { return this.signupForm.get('postalcode'); }
  


 goBack(): void {
  this.location.back();
}

}
