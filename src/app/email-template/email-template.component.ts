import { Component, OnInit, ContentChildren, ViewChildren, ViewContainerRef, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ElementService } from '../element.service';
import { EmailElement } from '../email-element';
import { ElementDirective } from '../element.directive';
import { GenericElementComponent } from '../generic-element.component';

@Component({
  selector: 'email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css']
})
export class EmailTemplateComponent implements OnInit {

  // List of elements 
  @Input() elements : EmailElement[];
  @ViewChild(ElementDirective) elemHost: ElementDirective;

  constructor(
    private elementService : ElementService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { 
    
  }

  ngOnInit() {
    this.initElements();
  }

  initElements() : void {
    this.elements = this.elementService.getElements();

    for(let i=0; i<this.elements.length; i++){
      let componentFactory = this.componentFactoryResolver
        .resolveComponentFactory(this.elements[i].component);
      
      let viewContainerRef = this.elemHost.viewContainerRef;
      viewContainerRef.clear();

      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<GenericElementComponent>componentRef.instance).data = this.elements[i].data;
    }
    
  }
}
