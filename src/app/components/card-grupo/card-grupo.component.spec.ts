import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGrupoComponent } from './card-grupo.component';

describe('CardGrupoComponent', () => {
  let component: CardGrupoComponent;
  let fixture: ComponentFixture<CardGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
