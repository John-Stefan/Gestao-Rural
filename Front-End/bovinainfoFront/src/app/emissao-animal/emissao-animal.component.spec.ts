import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissaoAnimalComponent } from './emissao-animal.component';

describe('EmissaoAnimalComponent', () => {
  let component: EmissaoAnimalComponent;
  let fixture: ComponentFixture<EmissaoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissaoAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissaoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
