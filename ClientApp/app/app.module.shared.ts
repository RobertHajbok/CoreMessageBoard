import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavComponent } from './components/nav/nav.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

import { AuthService } from './services/auth.service';
import { WebService } from './services/web.service';

export const sharedConfig: NgModule = {
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MessagesComponent,
        NavComponent,
        NewMessageComponent,
        RegisterComponent,
        LoginComponent,
        UserComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'messages', component: MessagesComponent },
            { path: 'messages/:name', component: MessagesComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent },
            { path: 'user', component: UserComponent }
        ]),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule
    ],
    providers: [
        AuthService,
        WebService
    ]
};
