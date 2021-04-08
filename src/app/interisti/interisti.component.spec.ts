import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteristiComponent } from './interisti.component';

describe('InteristiComponent', () => {
  let component: InteristiComponent;
  let fixture: ComponentFixture<InteristiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteristiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteristiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
