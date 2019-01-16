import { Component, Input } from '@angular/core';
import { GenericElementComponent } from '../generic-element.component';

@Component({
  selector: 'email-header-element',
  templateUrl: './email-header-element.component.html',
  styleUrls: ['./email-header-element.component.css']
})
export class EmailHeaderElementComponent implements GenericElementComponent {
  @Input() data: any;

}
