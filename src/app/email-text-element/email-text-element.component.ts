import { Component, Input } from '@angular/core';
import { GenericElementComponent } from '../generic-element.component';

@Component({
  selector: 'email-text-element',
  templateUrl: './email-text-element.component.html',
  styleUrls: ['./email-text-element.component.css']
})
export class EmailTextElementComponent implements GenericElementComponent {
  @Input() data: any;

}
