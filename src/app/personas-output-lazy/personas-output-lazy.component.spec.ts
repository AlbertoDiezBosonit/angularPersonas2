import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasOutputLazyComponent } from './personas-output-lazy.component';

describe('PersonasOutputLazyComponent', () => {
  let component: PersonasOutputLazyComponent;
  let fixture: ComponentFixture<PersonasOutputLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasOutputLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasOutputLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
