import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})

export class HomeComponent {
    messages = [{ text: 'some text', owner: 'Tim' }, { text: 'other text', owner: 'Jane' }]
}
