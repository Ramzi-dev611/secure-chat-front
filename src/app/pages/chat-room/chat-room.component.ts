import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  messages: string[] = ['lorem epsum 123452 zsfhijgf ', 'flisdgflshdgf', 'sdhfslkjdfh', 'lorem epsum 123452 zsfhijgf ', 'flisdgflshdgf', 'sdhfslkjdfh', 'lorem epsum 123452 zsfhijgf ', 'flisdgflshdgf', 'sdhfslkjdfh', 'lorem epsum 123452 zsfhijgf ', 'flisdgflshdgf', 'sdhfslkjdfh'];
  constructor() { }

  ngOnInit(): void {
  }

}
