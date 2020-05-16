import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctrack2Component } from './ctrack2.component';

describe('Ctrack2Component', () => {
  let component: Ctrack2Component;
  let fixture: ComponentFixture<Ctrack2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctrack2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctrack2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
