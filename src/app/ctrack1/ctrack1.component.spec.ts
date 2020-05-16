import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctrack1Component } from './ctrack1.component';

describe('Ctrack1Component', () => {
  let component: Ctrack1Component;
  let fixture: ComponentFixture<Ctrack1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctrack1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctrack1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
