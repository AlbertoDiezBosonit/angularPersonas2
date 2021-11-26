import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivoDetallePersonaComponent } from './reactivo-detalle-persona.component';

describe('ReactivoDetallePersonaComponent', () => {
  let component: ReactivoDetallePersonaComponent;
  let fixture: ComponentFixture<ReactivoDetallePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivoDetallePersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivoDetallePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
