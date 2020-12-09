import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleProducaoComponent } from './controle-producao.component';

describe('ControleProducaoComponent', () => {
  let component: ControleProducaoComponent;
  let fixture: ComponentFixture<ControleProducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleProducaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
