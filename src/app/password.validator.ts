// password.validator.ts

import { FormControl } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';

export interface ValidationResult {
    [key: string]: boolean;
}

export class PasswordValidator {

    public static strong(control: FormControl): ValidationResult {
        let hasNumber = /\d/.test(control.value);
        let hasUpper = /[A-Z]/.test(control.value);
        let hasLower = /[a-z]/.test(control.value);
        // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
        const valid = hasNumber && hasUpper && hasLower;
        if (!valid) {
            // return what´s not valid
            return { strong: true };
        }
        return null;
    }

    public static match(control: FormControl, value): ValidationResult {
        let confpassword = control.value
       
        // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
        const valid = confpassword == value;
        if (!valid) {
            // return what´s not valid
            return { match: true };
        }
        return null;
    }
}