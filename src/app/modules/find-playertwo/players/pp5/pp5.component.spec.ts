import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pp5Component } from './pp5.component';

describe('Pp5Component', () => {
  let component: Pp5Component;
  let fixture: ComponentFixture<Pp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pp5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
