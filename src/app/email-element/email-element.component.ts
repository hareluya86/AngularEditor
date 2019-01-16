import { Component, OnInit, ContentChildren, QueryList, Input } from '@angular/core';
import { EmailElement } from '../email-element';
import { GenericElementComponent } from '../generic-element.component';

@Component({
  selector: 'email-element',
  templateUrl: './email-element.component.html',
  styleUrls: ['./email-element.component.css']
})
export class EmailElementComponent implements GenericElementComponent {
  @Input() data: any;

}
