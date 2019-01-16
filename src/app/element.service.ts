import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExampleElements } from './example-elements';
import { EmailElement } from './email-element';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor() { }

  getElements() : Observable<EmailElement[]> {
    // Dummy elements
    return of(ExampleElements);
  }
}
