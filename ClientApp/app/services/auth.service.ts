import { Inject, Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    private nameKey = 'name';
    private tokenKey = 'token';

    constructor(private http: Http, private router: Router, @Inject('ORIGIN_URL') private originUrl: string,
        @Inject('LOCAL_STORAGE') private localStorage: any) { }

    get name() {
        return this.localStorage.getItem(this.nameKey);
    }

    get isAuthenticated() {
        return !!this.localStorage.getItem(this.tokenKey);
    }

    get tokenHeader() {
        var header = new Headers({ 'Authorization': 'Bearer ' + this.localStorage.getItem(this.tokenKey) });
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
        this.localStorage.removeItem(this.tokenKey);
        this.localStorage.removeItem(this.nameKey);
    }

    authenticate(res) {
        var authResponse = res.json();
        if (!authResponse.token)
            return;

        this.localStorage.setItem(this.tokenKey, authResponse.token);
        this.localStorage.setItem(this.nameKey, authResponse.firstName);
        this.router.navigate(['/']);
    }
}