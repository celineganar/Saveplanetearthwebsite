import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctrack6Component } from './ctrack6.component';

describe('Ctrack6Component', () => {
  let component: Ctrack6Component;
  let fixture: ComponentFixture<Ctrack6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctrack6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctrack6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
