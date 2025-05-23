import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientetipdComponent } from './pacientetipd.component';

describe('PacientetipdComponent', () => {
  let component: PacientetipdComponent;
  let fixture: ComponentFixture<PacientetipdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientetipdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientetipdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
