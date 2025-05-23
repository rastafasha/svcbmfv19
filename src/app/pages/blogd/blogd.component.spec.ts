import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdComponent } from './blogd.component';

describe('BlogdComponent', () => {
  let component: BlogdComponent;
  let fixture: ComponentFixture<BlogdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
