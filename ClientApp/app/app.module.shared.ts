import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavComponent } from './components/nav/nav.component';
import { NewMessageComponent } from './components/new-message/new-message.component';

export const sharedConfig: NgModule = {
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MessagesComponent,
        NavComponent,
        NewMessageComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'messages', component: MessagesComponent },
            { path: 'messages/:name', component: MessagesComponent }
        ]),
        MaterialModule,
        FormsModule,
        NoopAnimationsModule
    ]
};
