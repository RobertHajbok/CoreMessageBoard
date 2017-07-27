import { Inject, Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    // Local storage should be normally injected because server does not know
    // anything about it. This is just a simple implementation for testing
    private localStorage = {
        name: '',
        token: ''
    }

    constructor(private http: Http, private router: Router, @Inject('ORIGIN_URL') private originUrl: string) { }

    get name() {
        return this.localStorage.name;
    }

    get isAuthenticated() {
        return !!this.localStorage.token;
    }

    get tokenHeader() {
        var header = new Headers({ 'Authorization': 'Bearer ' + this.localStorage.token });
        return new RequestOptions({ headers: header });
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
        this.localStorage.token = null;
        this.localStorage.name = null;
    }

    authenticate(res) {
        var authResponse = res.json();
        if (!authResponse.token)
            return;

        this.localStorage.token = authResponse.token;
        this.localStorage.name = authResponse.firstName;
        this.router.navigate(['/']);
    }
}