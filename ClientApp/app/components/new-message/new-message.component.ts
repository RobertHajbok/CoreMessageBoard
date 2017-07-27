import { Component } from '@angular/core';
import { WebService } from '../../services/web.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'new-message',
    templateUrl: './new-message.html',
    styleUrls: ['./new-message.css']
})

export class NewMessageComponent {

    constructor(private webService: WebService, private auth: AuthService) { }

    message = {
        owner: this.auth.name,
        text: ""
    }

    post() {
        this.webService.postMessage(this.message);
    }
}
