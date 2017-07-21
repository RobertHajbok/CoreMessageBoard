import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {

    constructor(private http: Http, @Inject('ORIGIN_URL') private originUrl: string) { }

    getMessages() {
        return this.http.get(this.originUrl + '/api/messages').toPromise();
    }
}