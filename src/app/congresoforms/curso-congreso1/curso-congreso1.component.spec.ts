import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCongreso1Component } from './curso-congreso1.component';

describe('CursoCongreso1Component', () => {
  let component: CursoCongreso1Component;
  let fixture: ComponentFixture<CursoCongreso1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoCongreso1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoCongreso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
