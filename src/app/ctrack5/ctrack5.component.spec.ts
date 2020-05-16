import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctrack5Component } from './ctrack5.component';

describe('Ctrack5Component', () => {
  let component: Ctrack5Component;
  let fixture: ComponentFixture<Ctrack5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctrack5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctrack5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
