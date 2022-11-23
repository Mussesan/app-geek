import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() showMenuEmitter: EventEmitter<boolean> = new EventEmitter()
  private userAuthed: boolean = false;
  user: User[]

  constructor() {}

  authLogin(){
    this.userAuthed = true
    this.showMenuEmitter.emit(true)
  }



}
