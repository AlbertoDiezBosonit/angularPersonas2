import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasOutputComponent } from './personas-output.component';

describe('PersonasOutputComponent', () => {
  let component: PersonasOutputComponent;
  let fixture: ComponentFixture<PersonasOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
