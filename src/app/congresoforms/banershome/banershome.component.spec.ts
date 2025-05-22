import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanershomeComponent } from './banershome.component';

describe('BanershomeComponent', () => {
  let component: BanershomeComponent;
  let fixture: ComponentFixture<BanershomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanershomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanershomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
