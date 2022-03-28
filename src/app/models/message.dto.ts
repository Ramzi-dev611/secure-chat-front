export class Message {
    id: number;
    sent_by: number;
    sent_to: number;
    message: string;

    constructor(
        id: number = 0, 
        sentBy: number = 0,
        sentTo: number = 0,
        message: string = ""
        ){
            this.id = id;
            this.sent_by = sentBy;
            this.sent_to = sentTo;
            this.message = message;
        }

}
