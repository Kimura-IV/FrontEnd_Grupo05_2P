import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutComponent } from './layout.component';
import { DashBoardComponent } from './Pages/dash-board/dash-board.component';
import { HistorialVentaComponent } from './Pages/historial-venta/historial-venta.component';
import { ProductoComponent } from './Pages/producto/producto.component';
import { ReporteComponent } from './Pages/reporte/reporte.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { VentaComponent } from './Pages/venta/venta.component';
import { CategoriaComponent } from './Pages/categoria/categoria.component';
import { CompraComponent } from './Pages/compra/compra.component';
import { CartComponent } from './Pages/cart/cart.component';
import { DesarrolladorComponent } from './Pages/desarrollador/desarrollador.component';



const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children: [
    {path:'dashboard',component:DashBoardComponent},
    {path:'usuarios',component:UsuarioComponent},
    {path:'productos',component:ProductoComponent},
    {path:'venta',component:VentaComponent},
    {path:'historial_venta',component:HistorialVentaComponent},
    {path:'reportes',component:ReporteComponent},
    {path:'categorias',component:CategoriaComponent},
    {path:'compra',component:CompraComponent},
    {path:'cart',component:CartComponent},
    {path:'desarrollador',component:DesarrolladorComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
