import {EmailElement} from './email-element';
import { EmailElementComponent } from './email-element/email-element.component';

export const ExampleElements : EmailElement[] = [
    new EmailElement(EmailElementComponent,{
        title : "This is a generic email component"
    })
]
