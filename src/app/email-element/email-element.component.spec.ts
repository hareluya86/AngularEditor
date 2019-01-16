import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailElementComponent } from './email-element.component';

describe('EmailElementComponent', () => {
  let component: EmailElementComponent;
  let fixture: ComponentFixture<EmailElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
