import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormGroupComponent } from './create-form-group.component';

describe('CreateFormGroupComponent', () => {
  let component: CreateFormGroupComponent;
  let fixture: ComponentFixture<CreateFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
