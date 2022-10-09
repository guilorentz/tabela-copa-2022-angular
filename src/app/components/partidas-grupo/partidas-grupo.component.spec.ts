import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasGrupoComponent } from './partidas-grupo.component';

describe('PartidasGrupoComponent', () => {
  let component: PartidasGrupoComponent;
  let fixture: ComponentFixture<PartidasGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidasGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidasGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
