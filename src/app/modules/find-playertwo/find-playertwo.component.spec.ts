import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPlayertwoComponent } from './find-playertwo.component';

describe('FindPlayertwoComponent', () => {
  let component: FindPlayertwoComponent;
  let fixture: ComponentFixture<FindPlayertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPlayertwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindPlayertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
