import {EmailElement} from './email-element';
import { EmailHeaderElementComponent } from './email-header-element/email-header-element.component';
import { EmailTextElementComponent } from './email-text-element/email-text-element.component';

export const ExampleElements : EmailElement[] = [
    new EmailElement(EmailHeaderElementComponent,{
        title : "This is an email header!"
    }),
    new EmailElement(EmailTextElementComponent,{
        text : "This is the email text."
    }),
    new EmailElement(EmailTextElementComponent,{
        text : "This is another looooooooooooooooonger email text."
    })
]
