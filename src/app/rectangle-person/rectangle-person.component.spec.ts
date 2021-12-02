import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectanglePersonComponent } from './rectangle-person.component';

describe('RectanglePersonComponent', () => {
  let component: RectanglePersonComponent;
  let fixture: ComponentFixture<RectanglePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectanglePersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectanglePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
