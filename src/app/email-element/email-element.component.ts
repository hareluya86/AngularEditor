import { Component, OnInit } from '@angular/core';
import { EmailElement } from '../email-element';

@Component({
  selector: 'app-email-element',
  templateUrl: './email-element.component.html',
  styleUrls: ['./email-element.component.css']
})
export class EmailElementComponent implements OnInit {

  element: EmailElement;
  
  constructor() { }

  ngOnInit() {
  }

}
