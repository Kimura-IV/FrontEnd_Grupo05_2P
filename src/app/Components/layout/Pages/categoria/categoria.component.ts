import {  AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { ModalCategoriaComponent } from '../../Modales/modal-categoria/modal-categoria.component';
import { Categoria } from 'src/app/Interfaces/categoria';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})


export class CategoriaComponent implements OnInit, AfterViewInit {
  columnasTabla : string[] = ['nombre','estado','acciones'];
  dataInicio:Categoria[] = [];
  dataListaCategoria = new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator) paginacionTabla! : MatPaginator;
  constructor(
    private dialog: MatDialog,
    private _categoriaSercicio: CategoriaService,
    private _utilidadServicio: UtilidadService
  ) { }

  obtenerCategorias(){
    this._categoriaSercicio.lista().subscribe({
      next: (data) => {
        if (data.status) {
          this.dataListaCategoria = data.value;
        } else {
          this._utilidadServicio.mostrarAlerta("No se encontraron datos", "Oops!");
        }
      },
      error:(e) =>{}
    })
  }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.dataListaCategoria.paginator = this.paginacionTabla;
    
  }

  aplicarFiltroTabla(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaCategoria.filter = filterValue.trim().toLocaleLowerCase();
  }


  nuevaCategoria(){
    this.dialog.open(ModalCategoriaComponent,{
      disableClose:true
    }).afterClosed().subscribe(resultado =>{
      if(resultado === "true") this.obtenerCategorias();
    });
  }

  editarCategoria(categoria: Categoria){
    this.dialog.open(ModalCategoriaComponent,{
      disableClose:true,
      data: categoria
    }).afterClosed().subscribe(resultado => {
      if(resultado === "true") this.obtenerCategorias();
    });
  }

  eliminarCategoria(categoria:Categoria){
    Swal.fire({
      title: '¿Desea eliminar la categoria?',
      text: categoria.nombre,
      icon: "warning",
      confirmButtonColor :'#3085d6',
      confirmButtonText: "Si, eliminar",
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, volver'
    }).then((resultado) =>{
      if(resultado.isConfirmed){
        this._categoriaSercicio.eliminar(categoria.idCategoria).subscribe({
          next:(data) =>{
            if (data.status) {
              this._utilidadServicio.mostrarAlerta("La categoria fue eliminada","Listo!");
              this.obtenerCategorias();
            } else {
              this._utilidadServicio.mostrarAlerta("No se pudo eliminar la categoria","Error");
            }
          },
          error:(e) =>{}
        })
      }
    })

  }

}
