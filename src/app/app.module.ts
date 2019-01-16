import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { EmailElementComponent } from './email-element/email-element.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailTemplateComponent,
    EmailElementComponent  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EmailElementComponent
  ]
})
export class AppModule { }
