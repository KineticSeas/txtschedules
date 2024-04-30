import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router, RouterModule } from '@angular/router';
import { DataService } from 'src/app/data.service'; 
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { HashService } from 'src/app/hash.service';
import { NewSignupComponent } from 'src/app/components/new-signup/new-signup.component';

@Component({
  selector: 'app-new-signin',
  standalone: true,
  imports: [ CommonModule, MatButtonModule, MatCheckboxModule, RouterModule, FormsModule, ReactiveFormsModule, NewSignupComponent, MatFormFieldModule],
  templateUrl: './new-signin.component.html',
  styleUrls: ['./new-signin.component.css']
})
export class NewSigninComponent implements OnInit {

  
  signInForm!: FormGroup;
  showAlert: boolean = false;
  email: any = '';
  password: any = '';
  register_email: any = '';
  register_full_name: any = '';
  style: any = '';
  register_password: any = '';
  register_password2: any = '';
  enroll: any = 'N';

  constructor(
      private _activatedRoute: ActivatedRoute,
      private _formBuilder: FormBuilder,
      private _router: Router,
      private _dataService: DataService,
      private _hashService: HashService
  ) {
    
  }

  toggleEnroll() {
    if (this.enroll=='Y') {
      this.enroll='N'
    } else {
      this.enroll='Y'
    }
  }

  ngOnInit(): void
  {
      if (localStorage.getItem('uid')===null) {
          localStorage.setItem('uid','572');
      } else {
       
      }
 //     this._router.navigateByUrl('/sadmin'); 
  }

  async postLogin() {
    let pwd: any = "";
    try {
      pwd = await this._hashService.hashData(this.password);
      console.log('Hashed password:', this.password);
      // Perform other steps after hashing if needed
    } catch (error) {
      console.error('Error hashing password:', error);
    }
    this._dataService.postLogin(this.email, pwd).subscribe((data:any)=>{
      if (data.error_code == "0") {
        localStorage.setItem('uid',data.id);
        this._router.navigateByUrl('/sadmin'); 
      } else {
        alert(data.error_dsc)
      }
    });
  }


}