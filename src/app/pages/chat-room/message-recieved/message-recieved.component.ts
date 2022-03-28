import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-recieved',
  templateUrl: './message-recieved.component.html',
  styleUrls: ['./message-recieved.component.css']
})
export class MessageRecievedComponent implements OnInit {
  @Input() content: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
