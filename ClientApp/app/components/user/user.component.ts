import { Component } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
    selector: 'user',
    templateUrl: './user.html',
    styleUrls: ['./user.css']
})

export class UserComponent {
    model = {
        firstName: '',
        lastName: ''
    };

    constructor(private webService: WebService) { }

    ngOnInit() {
        this.webService.getUser().subscribe(res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        });
    }

    saveUser(userData) {
        this.webService.saveUser(userData).subscribe();
    }
}
