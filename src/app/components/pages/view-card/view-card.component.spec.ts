import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCardComponent } from './view-card.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewCardComponent', () => {
  let component: ViewCardComponent;
  let fixture: ComponentFixture<ViewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ViewCardComponent, NavbarComponent]
    });
    fixture = TestBed.createComponent(ViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
