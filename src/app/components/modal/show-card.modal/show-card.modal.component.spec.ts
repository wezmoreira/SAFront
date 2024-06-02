import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCardModalComponent } from './show-card.modal.component';

describe('ShowCardModalComponent', () => {
  let component: ShowCardModalComponent;
  let fixture: ComponentFixture<ShowCardModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCardModalComponent],
    });
    fixture = TestBed.createComponent(ShowCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
