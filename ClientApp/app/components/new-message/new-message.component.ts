import { Component } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
    selector: 'new-message',
    templateUrl: './new-message.html',
    styleUrls: ['./new-message.css'],
    providers: [WebService]
})

export class NewMessageComponent {

    constructor(private webService: WebService) { }

    message = {
        owner: "",
        text: ""
    }

    post() {
        this.webService.postMessage(this.message);
    }
}
