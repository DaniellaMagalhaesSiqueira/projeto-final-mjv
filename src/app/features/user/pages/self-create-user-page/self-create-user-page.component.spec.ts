import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCreateUserPageComponent } from './self-create-user-page.component';

describe('SelfCreateUserPageComponent', () => {
  let component: SelfCreateUserPageComponent;
  let fixture: ComponentFixture<SelfCreateUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfCreateUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfCreateUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
