import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPrecongreso1Component } from './curso-precongreso1.component';

describe('CursoPrecongreso1Component', () => {
  let component: CursoPrecongreso1Component;
  let fixture: ComponentFixture<CursoPrecongreso1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoPrecongreso1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoPrecongreso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
