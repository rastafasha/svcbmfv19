import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteRecentComponent } from './paciente-recent.component';

describe('PacienteRecentComponent', () => {
  let component: PacienteRecentComponent;
  let fixture: ComponentFixture<PacienteRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
