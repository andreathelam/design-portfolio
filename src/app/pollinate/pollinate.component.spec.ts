import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollinateComponent } from './pollinate.component';

describe('PollinateComponent', () => {
  let component: PollinateComponent;
  let fixture: ComponentFixture<PollinateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollinateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
