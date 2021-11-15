import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminUserPageComponent } from './create-admin-user-page.component';

describe('CreateAdminUserPageComponent', () => {
  let component: CreateAdminUserPageComponent;
  let fixture: ComponentFixture<CreateAdminUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdminUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdminUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
