import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from '../../services/web.service';

@Component({
    selector: 'messages',
    templateUrl: './messages.html',
    styleUrls: ['./messages.css']
})

export class MessagesComponent {
    constructor(private webService: WebService, private route: ActivatedRoute) { }

    ngOnInit() {
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
    }
}
