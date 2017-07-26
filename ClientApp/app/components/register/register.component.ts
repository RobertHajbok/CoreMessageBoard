import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'register',
    templateUrl: './register.html',
    styleUrls: ['./register.css'],
    providers: [AuthService]
})

export class RegisterComponent {
    form;

    constructor(private fb: FormBuilder, private auth: AuthService) {
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, { validator: matchingFields('password', 'confirmPassword') });
    }

    onSubmit() {
        console.log(this.form.errors);
        this.auth.register(this.form.value);
    }
}

function matchingFields(field1, field2) {
    return form => {
        if (form.controls[field1].value !== form.controls[field2].value)
            return { mismatchedFields: true }
    }
}