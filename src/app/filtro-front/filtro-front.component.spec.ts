import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroFrontComponent } from './filtro-front.component';

describe('FiltroFrontComponent', () => {
  let component: FiltroFrontComponent;
  let fixture: ComponentFixture<FiltroFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
