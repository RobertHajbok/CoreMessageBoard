import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { AuthService } from './auth.service';

@Injectable()
export class WebService {

    private messageStore = [];
    private messageSubject = new Subject();
    messages = this.messageSubject.asObservable();

    constructor(private http: Http, private sb: MdSnackBar, private auth: AuthService, @Inject('ORIGIN_URL') private originUrl: string) {
        this.getMessages(null);
    }

    getMessages(user) {
        user = (user) ? '/' + user : '';
        this.http.get(this.originUrl + '/api/messages' + user).subscribe(response => {
            this.messageStore = response.json();
            this.messageSubject.next(this.messageStore);
        }, error => {
            this.errorHandling("Unable to log messages");
        });
    }

    async postMessage(message) {
        try {
            var response = await this.http.post(this.originUrl + '/api/messages', message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
        } catch (e) {
            this.errorHandling("Unable to post message");
        }
    }

    getUser() {
        return this.http.get(this.originUrl + '/api/users/me', this.auth.tokenHeader).map(res => res.json());
    }

    saveUser(userData) {
        return this.http.post(this.originUrl + '/api/users/me', userData, this.auth.tokenHeader).map(res => res.json());
    }

    private errorHandling(error) {
        console.log(error);
        this.sb.open(error, 'close', {
            duration: 2000
        });
    }
}