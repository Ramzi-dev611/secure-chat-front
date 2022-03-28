import { Injectable } from '@angular/core';
import { Message } from '../models/message.dto';
import { TEST_SOCKET } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  webSocket: WebSocket | undefined;
  chatMessages: Message[] = []
  constructor() {}

  public openWebSocket(){
    this.webSocket = new WebSocket(TEST_SOCKET);
    this.webSocket.onopen = (event) => {
      console.log("Opened Connection ", event);
    };

    this.webSocket.onmessage = (event: MessageEvent<string>) => {
      const message: Message = JSON.parse(event.data);
      this.chatMessages.push(message);
      console.log("debug 2")
    };
    this.webSocket.onclose = (event) => {
      console.log("closed Web Socket ", event)
    };
    this.webSocket.onerror = (err) => {
      console.log(err)
    }
  }

  public sendMessage(message: Message){
    this.webSocket.send(JSON.stringify(message));
  }

  public closeWebSocket(){
    this.webSocket.close();
  }
}
