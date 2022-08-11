import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormUsersComponent } from './create-form-users.component';

describe('CreateFormUsersComponent', () => {
  let component: CreateFormUsersComponent;
  let fixture: ComponentFixture<CreateFormUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
