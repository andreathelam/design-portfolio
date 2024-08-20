import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewworldComponent } from './newworld.component';

describe('NewworldComponent', () => {
  let component: NewworldComponent;
  let fixture: ComponentFixture<NewworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewworldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
