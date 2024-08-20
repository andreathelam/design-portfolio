import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgameComponent } from './catgame.component';

describe('CatgameComponent', () => {
  let component: CatgameComponent;
  let fixture: ComponentFixture<CatgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
