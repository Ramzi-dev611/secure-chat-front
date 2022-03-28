import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.dto';
import { WebSocketService } from 'src/app/utilities/web-socket.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  messages: string[] = ['lorem epsum 123452 zsfhijgf ', 'flisdgflshdgf', 'sdhfslkjdfh', 'lorem epsum 123452 zsfhijgf ', 'flisdgflshdgf', 'sdhfslkjdfh', 'lorem epsum 123452 zsfhijgf ', 'flisdgflshdgf', 'sdhfslkjdfh', 'lorem epsum 123452 zsfhijgf ', 'flisdgflshdgf', 'sdhfslkjdfh'];
  typedMessage: string = "";
  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
      this.webSocketService.closeWebSocket()
  }

  sendMessage(){
    const message: Message = new Message(1,1,1, this.typedMessage);
    this.webSocketService.sendMessage(message);
    this.typedMessage = "";
  }

}
