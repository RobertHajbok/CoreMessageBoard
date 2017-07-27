import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'nav',
    templateUrl: './nav.html',
    styleUrls: ['./nav.css']
})

export class NavComponent {
    constructor(private auth: AuthService) { }
}
