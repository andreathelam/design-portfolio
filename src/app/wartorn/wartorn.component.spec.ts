import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WartornComponent } from './wartorn.component';

describe('WartornComponent', () => {
  let component: WartornComponent;
  let fixture: ComponentFixture<WartornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WartornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WartornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
