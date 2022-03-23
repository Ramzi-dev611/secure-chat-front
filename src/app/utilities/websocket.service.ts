import { Injectable } from '@angular/core';
import * as Rx from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private subject: Rx.Subject<MessageEvent>|undefined;
  constructor() { }

  public connect(url: string): Rx.Subject<MessageEvent>{
    if(!this.subject){
      this.subject = this.create(url)
    }
    return this.subject;
  }

  public create(url: string): Rx.Subject<MessageEvent>{
    let ws = new WebSocket(url);
    
    let observable = new Rx.Observable((obs: Rx.Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror= obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws)
    });

    let observer = {
      next: (data: Object) => {
        if(ws.readyState === WebSocket.OPEN){
          ws.send(JSON.stringify(data));
        }
      },
    }
    return Rx.Subject.create(observer, observable);
  }
}
