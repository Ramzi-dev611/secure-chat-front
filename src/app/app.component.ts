import { Component, HostListener, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'chatroom-front';
  navbarTransparent: boolean = true;
  currentUri: string = '';

  constructor(private router: Router){}

  ngDoCheck(){
    this.currentUri = this.router.url;
    this.navbarTransparent = this.navbarTransparent && this.currentUri === "/home";
  }
  
  @HostListener('window:scroll', ['$event']) // for window scroll events
  changeNavbarTransparency(){
    if (this.currentUri === "/home"){
      if (window.scrollY > 212)
        this.navbarTransparent = false;
      else
        this.navbarTransparent = true;
    }
  }
}
