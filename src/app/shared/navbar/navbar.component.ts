import { Location } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  private toggleButton: any;
  private sidebarVisible: boolean = false;

  @Input() isTransparent: boolean = true;
  constructor(
    public location: Location,
    private element: ElementRef
    ) { }

  sidebarOpen() {
    const list = document.getElementById('navbarToggler');
    const actions = document.getElementById('actions');
    list?.classList.remove('collapse');
    actions?.classList.add('bg-primary');
    actions?.classList.add('bg-gradient');
    this.sidebarVisible = true;
  };

  sidebarClose() {
    const list = document.getElementById('navbarToggler');
    const actions = document.getElementById('actions');
    list?.classList.add('collapse');
    actions?.classList.remove('bg-primary');
    actions?.classList.remove('bg-gradient');
    this.sidebarVisible = false;
  };
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };
  ngOnInit(): void {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }

}
