import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[element]'
})
export class ElementDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}