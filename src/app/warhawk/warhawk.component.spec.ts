import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarhawkComponent } from './warhawk.component';

describe('WarhawkComponent', () => {
  let component: WarhawkComponent;
  let fixture: ComponentFixture<WarhawkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarhawkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarhawkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
