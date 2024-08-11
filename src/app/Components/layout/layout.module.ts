import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { DashBoardComponent } from './Pages/dash-board/dash-board.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { ProductoComponent } from './Pages/producto/producto.component';
import { VentaComponent } from './Pages/venta/venta.component';
import { HistorialVentaComponent } from './Pages/historial-venta/historial-venta.component';
import { ReporteComponent } from './Pages/reporte/reporte.component';

import { SharedModule } from 'src/app/Reutilizable/shared/shared.module';
import { ModalUsuarioComponent } from './Modales/modal-usuario/modal-usuario.component';
import { ModalProductoComponent } from './Modales/modal-producto/modal-producto.component';
import { ModalDetalleVentaComponent } from './Modales/modal-detalle-venta/modal-detalle-venta.component';

import { CategoriaComponent } from './Pages/categoria/categoria.component';
import { ModalCategoriaComponent } from './Modales/modal-categoria/modal-categoria.component';
import { CompraComponent } from './Pages/compra/compra.component';
import { ModalDetalleCompraComponent } from './Modales/modal-detalle-compra/modal-detalle-compra.component';
import { CartComponent } from './Pages/cart/cart.component';
import { DesarrolladorComponent } from './Pages/desarrollador/desarrollador.component';


@NgModule({
  declarations: [
    DashBoardComponent,
    UsuarioComponent,
    ProductoComponent,
    VentaComponent,
    HistorialVentaComponent,
    ReporteComponent,
    ModalUsuarioComponent,
    ModalProductoComponent,
    ModalDetalleVentaComponent,
    CategoriaComponent,
    ModalCategoriaComponent,
    CompraComponent,
    ModalDetalleCompraComponent,
    CartComponent,
    DesarrolladorComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

    SharedModule
  ]
})
export class LayoutModule { }
