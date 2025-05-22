import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagComponent } from './instag.component';

describe('InstagComponent', () => {
  let component: InstagComponent;
  let fixture: ComponentFixture<InstagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
