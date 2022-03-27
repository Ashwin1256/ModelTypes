import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { forbiddennameValidator } from './validators/forbiddenname';
import { validatePassword } from './validators/reenterpassword';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularApp';

  public submitted: boolean = false;
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private  _registerationService: RegistrationService) { }

  get alternateEmail() {
    return this.registrationForm.get('alternateEmail') as FormArray;
  }

  addAlternateEmail() {

    this.alternateEmail.push(this.fb.control(''));
  }


  ngOnInit(): void {

    this.registrationForm = this.fb.group({

      username: [''],
      email: [''],
      promotion: [''],
      password: ['aa', [Validators.required, forbiddennameValidator(/password/)]],
      confirmpassword: ['aa'],

      address: this.fb.group({

        city: [''],
        state: [''],
        country: ['']


      }),

      alternateEmail: this.fb.array([])

    }, { validator: validatePassword })


    this.registrationForm.get('promotion')?.valueChanges.subscribe(checkedValue => {

      const email = this.registrationForm.get('email')

      if (checkedValue) {
        email?.setValidators(Validators.required)
      }
      else {
        email?.clearValidators();
      }
      email?.updateValueAndValidity();

    })

  }
  onsubmit() {

    this.submitted = true;

    this._registerationService.register(this.registrationForm.value).subscribe(
      response=> console.log('success', response),
      error => console.error('Error ', error)

    );

  }



}
