import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissaoFuncionarioComponent } from './emissao-funcionario.component';

describe('EmissaoFuncionarioComponent', () => {
  let component: EmissaoFuncionarioComponent;
  let fixture: ComponentFixture<EmissaoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissaoFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
