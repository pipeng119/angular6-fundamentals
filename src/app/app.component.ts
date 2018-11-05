import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';
// // import {MailService} from './mail.service'

@Component({
  selector: 'app-root',
  template: `
    <h3>{{title}}</h3>
    <ul>
      <li *ngFor="let message of mailService.messages;">
        {{message.text}}
      </li>
    </ul>
    <app-simple-form
      *ngFor="let message of mailService.messages"
      [message]="message.text"
      (update)="onUpdate(message.id,$event.text)"
    ></app-simple-form>
  `
})
export class AppComponent {
  title = 'Hello Angular!';
  // constructor(private mailService: MailService) {}
  // constructor(
  //   @Inject(MailService) private mailService,
  //   @Inject('apiUrl') private apiUrl  
  // ) {}
  constructor(private mailService: MailService) {}

  onUpdate(id,text){
    this.mailService.update(id,text)
  }
}

