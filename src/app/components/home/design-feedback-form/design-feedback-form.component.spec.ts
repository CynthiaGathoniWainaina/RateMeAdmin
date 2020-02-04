import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignFeedbackFormComponent } from './design-feedback-form.component';

describe('DesignFeedbackFormComponent', () => {
  let component: DesignFeedbackFormComponent;
  let fixture: ComponentFixture<DesignFeedbackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignFeedbackFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
