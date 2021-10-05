import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorLayout } from './administrator.layout';

describe('AdministratorLayout', () => {
  let component: AdministratorLayout;
  let fixture: ComponentFixture<AdministratorLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorLayout ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
