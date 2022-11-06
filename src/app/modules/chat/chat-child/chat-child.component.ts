import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-child',
  templateUrl: './chat-child.component.html',
  styleUrls: ['./chat-child.component.css']
})
export class ChatChildComponent implements OnInit {

  user: User; 

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('USER'));

    console.log(this.user)
  }

}
