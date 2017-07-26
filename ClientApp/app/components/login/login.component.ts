import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
    providers: [AuthService]
})

export class LoginComponent {

    loginData = {
        email: '',
        password: ''
    }

    constructor(private auth: AuthService) { }

    login() {
        this.auth.login(this.loginData);
    }
}