import { Component } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
    providers: [WebService]
})

export class HomeComponent {

    messages = [];

    constructor(private webService: WebService) { }

    async ngOnInit() {
        var response = await this.webService.getMessages();
        this.messages = response.json();
    }
}
