import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    private nameKey = 'name';
    private tokenKey = 'token';

    constructor(private http: Http, private router: Router, @Inject('ORIGIN_URL') private originUrl: string) { }

    get name() {
        return localStorage.getItem(this.nameKey);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.tokenKey);
    }

    register(user) {
        delete user.confirmPassword;
        this.http.post(this.originUrl + '/auth/register', user).subscribe(res => {
            this.authenticate(res);
        });
    }

    login(loginData) {
        this.http.post(this.originUrl + '/auth/login', loginData).subscribe(res => {
            this.authenticate(res);
        });
    }
    
    logout() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.nameKey);
    }

    authenticate(res) {
        var authResponse = res.json();
        if (!authResponse.token)
            return;

        localStorage.setItem(this.tokenKey, authResponse.token);
        localStorage.setItem(this.nameKey, authResponse.firstName);
        this.router.navigate(['/']);
    }
}