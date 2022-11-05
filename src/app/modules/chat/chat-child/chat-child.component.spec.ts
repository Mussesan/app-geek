import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatChildComponent } from './chat-child.component';

describe('ChatChildComponent', () => {
  let component: ChatChildComponent;
  let fixture: ComponentFixture<ChatChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
