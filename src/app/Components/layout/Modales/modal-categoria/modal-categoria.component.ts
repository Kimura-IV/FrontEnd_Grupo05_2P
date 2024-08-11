import { Component, OnInit, Inject } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/Interfaces/categoria';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';

@Component({
  selector: 'app-modal-Categoria',
  templateUrl: './modal-Categoria.component.html',
  styleUrls: ['./modal-Categoria.component.css']
})
export class ModalCategoriaComponent implements OnInit {

  formularioCategoria: FormGroup;
  tituloAccion: string = "Agregar";
  botonAccion: string = "Guardar";

  constructor(
    private modalActual: MatDialogRef<ModalCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public datosCategoria: Categoria,
    private fb: FormBuilder,
    private _CategoriaServicio: CategoriaService,
    private _utilidadServicio: UtilidadService
  ) {
    this.formularioCategoria = this.fb.group({
      nombre: ['', Validators.required],
    });

    if (this.datosCategoria != null) {
      this.tituloAccion = "Editar";
      this.botonAccion = "Actualizar";
    }
  }

  ngOnInit(): void {
    if (this.datosCategoria != null) {
      this.formularioCategoria.patchValue({
        nombre: this.datosCategoria.nombre,
        esActivo: this.datosCategoria.esActivo
      });
    }
  }

  guardarEditar_Categoria() {
    const _Categoria: Categoria = {
      idCategoria: this.datosCategoria == null ? 0 : this.datosCategoria.idCategoria,
      nombre: this.formularioCategoria.value.nombre,
      esActivo: this.formularioCategoria.value.esActivo
    };

    if (this.datosCategoria == null) {
      this._CategoriaServicio.guardar(_Categoria).subscribe({
        next: (data) => {
          if (data.status) {
            this._utilidadServicio.mostrarAlerta("La categoría fue registrada", "Éxito");
            this.modalActual.close("true");
          } else {
            this._utilidadServicio.mostrarAlerta("No se pudo registrar la categoría", "Error");
          }
        },
        error: (e) => {
          console.error(e);
          this._utilidadServicio.mostrarAlerta("Ocurrió un error al registrar la categoría", "Error");
        }
      });
    } else {
      this._CategoriaServicio.editar(_Categoria).subscribe({
        next: (data) => {
          if (data.status) {
            this._utilidadServicio.mostrarAlerta("La categoría fue editada", "Éxito");
            this.modalActual.close("true");
          } else {
            this._utilidadServicio.mostrarAlerta("No se pudo editar la categoría", "Error");
          }
        },
        error: (e) => {
          console.error(e);
          this._utilidadServicio.mostrarAlerta("Ocurrió un error al editar la categoría", "Error");
        }
      });
    }
  }
}
