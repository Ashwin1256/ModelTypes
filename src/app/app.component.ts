import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddennameValidator } from './validators/forbiddenname';
import { validatePassword } from './validators/reenterpassword';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularApp';

  registrationForm!: FormGroup;

  constructor(private fb:FormBuilder){}

  

  
  ngOnInit(): void {

    this.registrationForm = this.fb.group({

      username:[''],
      password:['aa',[Validators.required,forbiddennameValidator(/password/)]],
      confirmpassword:[''],
      
      address:this.fb.group({
  
        city:[''],
        state:[''],
        country:['']
  
  
      })
  
      
      
       }, {validator:validatePassword})
  
    
  }

 

  
 
}
