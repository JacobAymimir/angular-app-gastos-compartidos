import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFountComponent } from './page-not-found.component';

describe('PageNotFountComponent', () => {
  let component: PageNotFountComponent;
  let fixture: ComponentFixture<PageNotFountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
