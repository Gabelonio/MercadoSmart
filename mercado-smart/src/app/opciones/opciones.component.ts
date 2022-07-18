import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent {

  hashtags = this._formBuilder.group({
    diaDelPadre: false,
    hiphopalparque: false,
    asianfestBogota: false,
    diadelaMadre: false,
    diadelTrabajador: false,
    daily: false
  });

  rangoFecha: string = "";
  rangoFechas: string[] = ['Enero - Marzo', 'Abril - Junio', 'Julio - Septiembre', 'Octubre - Diciembre'];

  constructor(private _formBuilder: FormBuilder) {}

}
