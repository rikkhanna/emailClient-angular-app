import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {

  mails = [];
  constructor(private emailservice: EmailService) { }

  ngOnInit(): void {
    this.emailservice.getEmails().subscribe((emails) => {
      this.mails = emails; //array of all mails sent to user
    });
  }


}
