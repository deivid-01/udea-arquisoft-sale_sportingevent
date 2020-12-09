import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportingEventsComponent } from './sporting-events.component';

describe('SportingEventsComponent', () => {
  let component: SportingEventsComponent;
  let fixture: ComponentFixture<SportingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportingEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
