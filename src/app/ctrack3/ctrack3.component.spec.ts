import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctrack3Component } from './ctrack3.component';

describe('Ctrack3Component', () => {
  let component: Ctrack3Component;
  let fixture: ComponentFixture<Ctrack3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctrack3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctrack3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
