import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasInputComponent } from './personas-input.component';

describe('PersonasInputComponent', () => {
  let component: PersonasInputComponent;
  let fixture: ComponentFixture<PersonasInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
