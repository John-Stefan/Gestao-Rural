import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderControleProducaoComponent } from './header-controle-producao.component';

describe('HeaderControleProducaoComponent', () => {
  let component: HeaderControleProducaoComponent;
  let fixture: ComponentFixture<HeaderControleProducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderControleProducaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderControleProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
