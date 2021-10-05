import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLayout } from './website.layout';

describe('WebsiteLayout', () => {
  let component: WebsiteLayout;
  let fixture: ComponentFixture<WebsiteLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteLayout ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
