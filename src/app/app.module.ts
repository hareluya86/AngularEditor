import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { EmailHeaderElementComponent } from './email-header-element/email-header-element.component';
import { ElementDirective } from './element.directive';
import { EmailTextElementComponent } from './email-text-element/email-text-element.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmailTemplateComponent,
    EmailHeaderElementComponent,
    ElementDirective,
    EmailTextElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EmailHeaderElementComponent,
    EmailTextElementComponent
  ]
})
export class AppModule { }
