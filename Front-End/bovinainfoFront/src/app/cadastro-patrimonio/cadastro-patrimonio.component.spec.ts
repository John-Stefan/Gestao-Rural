import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPatrimonioComponent } from './cadastro-patrimonio.component';

describe('CadastroPatrimonioComponent', () => {
  let component: CadastroPatrimonioComponent;
  let fixture: ComponentFixture<CadastroPatrimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPatrimonioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
