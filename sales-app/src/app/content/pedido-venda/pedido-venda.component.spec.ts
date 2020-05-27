import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoVendaComponent } from './pedido-venda.component';

describe('PedidoVendaComponent', () => {
  let component: PedidoVendaComponent;
  let fixture: ComponentFixture<PedidoVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
