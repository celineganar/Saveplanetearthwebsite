import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNotes1Component } from './update-notes1.component';

describe('UpdateNotes1Component', () => {
  let component: UpdateNotes1Component;
  let fixture: ComponentFixture<UpdateNotes1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNotes1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNotes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
