import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongresoFormComponent } from './congreso-form.component';

describe('CongresoFormComponent', () => {
  let component: CongresoFormComponent;
  let fixture: ComponentFixture<CongresoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongresoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongresoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
