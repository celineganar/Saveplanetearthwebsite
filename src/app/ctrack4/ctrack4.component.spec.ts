import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctrack4Component } from './ctrack4.component';

describe('Ctrack4Component', () => {
  let component: Ctrack4Component;
  let fixture: ComponentFixture<Ctrack4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctrack4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctrack4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
