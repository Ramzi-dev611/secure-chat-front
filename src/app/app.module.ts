import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ChatRoomComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
