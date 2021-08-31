import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleArtifactComponent } from './example-artifact.component';

describe('ExampleArtifactComponent', () => {
  let component: ExampleArtifactComponent;
  let fixture: ComponentFixture<ExampleArtifactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleArtifactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleArtifactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
