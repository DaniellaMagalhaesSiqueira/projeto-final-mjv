import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConsultationsPageComponent } from './all-consultations-page.component';

describe('AllConsultationsPageComponent', () => {
  let component: AllConsultationsPageComponent;
  let fixture: ComponentFixture<AllConsultationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllConsultationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllConsultationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
