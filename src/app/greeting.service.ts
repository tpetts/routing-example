import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }

  get greeting() {
    return `Hello ${this.who}`;
  }

  who = "";
  
}
