import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPreviewComponent } from './visual-preview.component';

describe('VisualPreviewComponent', () => {
  let component: VisualPreviewComponent;
  let fixture: ComponentFixture<VisualPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
