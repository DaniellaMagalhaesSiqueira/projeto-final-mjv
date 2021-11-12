// import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validator, Validators } from "@angular/forms";


// export function equalsTo(controlName: string, confirmControlName: string){
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const confirmControl = formGroup.controls[confirmControlName];
//         if(confirmControl.errors && !confirmControl.errors.equalsTo){
//             return;
//         }

//         if(control.value !== confirmControl.value){
//             confirmControl.setErrors({equalsTo: true})
//         }else{
//             confirmControl.setErrors(null);
//         }
//     }
// }


import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}





// export class StringValidator{
    // validate(control: AbstractControl): ValidationErrors | null {
    //     throw new Error("Method not implemented.");
    // }
    // static equalsTo(password: FormControl){
    //     const formGroup = password.root;
    //     let pass = password.value;
    //     let confPass = formGroup.root.get('confirmPassword')?.value;
    //     if(pass !== confPass){
    //         formGroup.setErrors({notEquals: true});
    //         throw new Error('Senhas não conferem');
    //     }

    // }




// }
        // const validator = (formControl: FormControl) => {
            // if(otherField == null){
            //     throw new Error('É necessário informar um campo.');
            // }
            // const field = <FormGroup>(formControl.root).get(otherField);
            // if(!field){
            //     throw new Error('É necessário informar um campo válido');
            // }
        //     if(field.value !== formControl.value){
        //         return {equalsTo: false };
        //     }
        //     return null;
        // };
        // return validator;
