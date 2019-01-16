import { Component, OnInit, ContentChildren } from '@angular/core';
import { elementStart } from '@angular/core/src/render3';
import { EmailElementComponent } from '../email-element/email-element.component';
import { ElementService } from '../element.service';
import { EmailElement } from '../email-element';

@Component({
  selector: 'email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css']
})
export class EmailTemplateComponent implements OnInit {

  // List of elements 
  @ContentChildren(EmailElementComponent) elements;

  constructor(private elementService : ElementService) { 
    this.initElements();
  }

  ngOnInit() {

  }

  initElements() : void {
    this.elementService.getElements()
      .subscribe(elements => this.elements = elements);
  }
}
