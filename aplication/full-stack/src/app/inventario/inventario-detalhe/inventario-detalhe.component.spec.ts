import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioDetalheComponent } from './inventario-detalhe.component';

describe('InventarioDetalheComponent', () => {
  let component: InventarioDetalheComponent;
  let fixture: ComponentFixture<InventarioDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
