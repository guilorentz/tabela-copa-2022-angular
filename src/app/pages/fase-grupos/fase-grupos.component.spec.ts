import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseGruposComponent } from './fase-grupos.component';

describe('FaseGruposComponent', () => {
  let component: FaseGruposComponent;
  let fixture: ComponentFixture<FaseGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaseGruposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
