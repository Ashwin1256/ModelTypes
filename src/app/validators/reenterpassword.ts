import { AbstractControl } from "@angular/forms";

export function validatePassword(control:AbstractControl): {[key:string]:any}| null{


    const pwd = control.get('password')?.value;

    const rpwd = control.get('confirmpassword')?.value;


    if(pwd===rpwd){
        return null;
    }
    else{


       
         control.get('confirmpassword')?.setErrors({'pwdmatch':rpwd});

         return{'pwdmatch':rpwd} 

    }



}