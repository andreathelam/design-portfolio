import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlingpotionsComponent } from './puzzlingpotions.component';

describe('PuzzlingpotionsComponent', () => {
  let component: PuzzlingpotionsComponent;
  let fixture: ComponentFixture<PuzzlingpotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzlingpotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzlingpotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
