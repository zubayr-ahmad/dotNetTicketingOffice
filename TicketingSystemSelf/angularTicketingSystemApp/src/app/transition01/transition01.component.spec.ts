import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transition01Component } from './transition01.component';

describe('Transition01Component', () => {
  let component: Transition01Component;
  let fixture: ComponentFixture<Transition01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Transition01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transition01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
