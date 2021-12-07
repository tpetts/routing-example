import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-kitty',
  templateUrl: './kitty.component.html',
  styleUrls: ['./kitty.component.css']
})
export class KittyComponent implements OnInit {

  constructor(public kittyGreeting: GreetingService) { }

  ngOnInit(): void {
  }

}
