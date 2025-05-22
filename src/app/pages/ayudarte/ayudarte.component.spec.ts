import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudarteComponent } from './ayudarte.component';

describe('AyudarteComponent', () => {
  let component: AyudarteComponent;
  let fixture: ComponentFixture<AyudarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
