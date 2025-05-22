import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueesCirugiaComponent } from './quees-cirugia.component';

describe('QueesCirugiaComponent', () => {
  let component: QueesCirugiaComponent;
  let fixture: ComponentFixture<QueesCirugiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueesCirugiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueesCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
