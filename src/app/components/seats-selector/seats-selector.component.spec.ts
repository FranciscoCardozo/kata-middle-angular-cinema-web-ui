import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsSelectorComponent } from './seats-selector.component';

describe('SeatsSelectorComponent', () => {
  let component: SeatsSelectorComponent;
  let fixture: ComponentFixture<SeatsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatsSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
