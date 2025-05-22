import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPrecongreso2Component } from './curso-precongreso2.component';

describe('CursoPrecongreso2Component', () => {
  let component: CursoPrecongreso2Component;
  let fixture: ComponentFixture<CursoPrecongreso2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoPrecongreso2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoPrecongreso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
