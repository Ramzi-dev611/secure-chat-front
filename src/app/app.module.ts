import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Routing } from './app.routing';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { RegistrationFormComponent } from './pages/registration-page/registration-form/registration-form.component';
import { LoginFormComponent } from './pages/registration-page/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageSentComponent } from './pages/chat-room/message-sent/message-sent.component';
import { MessageRecievedComponent } from './pages/chat-room/message-recieved/message-recieved.component';
import { WebsocketService } from './utilities/websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ChatRoomComponent,
    NavbarComponent,
    FooterComponent,
    RegistrationPageComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    MessageSentComponent,
    MessageRecievedComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    ReactiveFormsModule
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
