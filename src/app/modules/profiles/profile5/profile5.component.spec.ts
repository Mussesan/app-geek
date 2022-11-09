import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile5Component } from './profile5.component';

describe('Profile5Component', () => {
  let component: Profile5Component;
  let fixture: ComponentFixture<Profile5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Profile5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profile5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
