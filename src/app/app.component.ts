import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatroom-front';
  navbarTransparent: boolean = true;
  
  @HostListener('window:scroll', ['$event']) // for window scroll events
  changeNavbarTransparency(){
    if(window.scrollY > 212)
      this.navbarTransparent = false;
    else
      this.navbarTransparent = true;
  }
}
