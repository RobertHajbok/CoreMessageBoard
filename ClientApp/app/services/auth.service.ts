import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

    constructor(private http: Http, @Inject('ORIGIN_URL') private originUrl: string) { }

    register(user) {
        this.http.post(this.originUrl + '/auth/register', user).subscribe();
    }
}