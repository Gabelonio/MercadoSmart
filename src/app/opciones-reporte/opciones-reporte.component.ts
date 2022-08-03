import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Hashtag } from '../modelos/hashtag.model';
import { AcotadorDatosTendenciasService } from '../servicios/acotador-datos-tendencias.service';

type Mes = {nombre : string, indice : number}

const MESES = [
  {
    nombre : "Enero",
    indice: 0
  },
  {
    nombre : "Febrero",
    indice: 1
  },
  {
    nombre : "Marzo",
    indice: 2
  },
  {
    nombre : "Abril",
    indice: 3
  },
  {
    nombre : "Mayo",
    indice: 4
  },
  {
    nombre : "Junio",
    indice: 5
  },
  {
    nombre : "Julio",
    indice: 6
  },
  {
    nombre : "Agosto",
    indice: 7
  },
  {
    nombre : "Septiembre",
    indice: 8
  },
  {
    nombre : "Octubre",
    indice: 9
  },
  {
    nombre : "Noviembre",
    indice: 10
  },
  {
    nombre : "Diciembre",
    indice: 11
  }
] as Mes[];

@Component({
  selector: 'app-opciones-reporte',
  templateUrl: './opciones-reporte.component.html',
  styleUrls: ['./opciones-reporte.component.css']
})
export class OpcionesReporteComponent {

  hashtags: Hashtag[] = [
    {nombre : "#Guerra", isSeleccionado : false},
    {nombre : "#Festividades", isSeleccionado : false},
    {nombre : "#Maquillaje", isSeleccionado : false},
    {nombre : "#Moda", isSeleccionado : false},
    {nombre : "#Automoviles", isSeleccionado : false}
  ];

  fechasIniciales: Mes[] = MESES.slice();
  fechasFinales: Mes[]  = MESES.slice();
  fechaInicial = 0;
  fechaFinal = 12;

  constructor(private servicioAcotadorDatos : AcotadorDatosTendenciasService) {}

  onHashtagSeleccionado(event: any){

  }

  onFechaInicialCambiada(event: any) {
    this.fechaInicial = +event.value;
    this.fechasFinales = MESES.slice(event.value + 1, MESES.length);
  }

  onFechaFinalCambiada(event: any) {
    this.fechaFinal = +event.value;
    this.fechasIniciales = MESES.slice(0,event.value);
  }

}
