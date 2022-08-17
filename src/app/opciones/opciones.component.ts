import { Component } from '@angular/core';
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
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css'],
})
export class OpcionesComponent {

  hashtags: Hashtag[] = [
    {nombre : "#Navidad", isSeleccionado : false},
    {nombre : "#DiadelPadre", isSeleccionado : false},
    {nombre : "#DiadelaMadre", isSeleccionado : false},
    {nombre : "#SanValentin", isSeleccionado : false},
    {nombre : "#Cometa", isSeleccionado : false}
  ];

  fechasIniciales: Mes[] = MESES.slice();
  fechasFinales: Mes[]  = MESES.slice();
  fechaInicial = 0;
  fechaFinal = 12;

  formatLabel(value: number) {
    return MESES[value-1];
  }

  constructor(private servicioAcotadorDatos : AcotadorDatosTendenciasService) {}

  onValoresCambiados() {
    this.servicioAcotadorDatos.onOpcionesSeleccionadas(this.hashtags, this.fechaInicial + 1, this.fechaFinal + 1);
  }

  onFechaInicialCambiada(event: any) {
    this.fechaInicial = +event.value;
    this.fechasFinales = MESES.slice(event.value + 1, MESES.length);
    this.onValoresCambiados();
  }

  onFechaFinalCambiada(event: any) {
    this.fechaFinal = +event.value;
    this.fechasIniciales = MESES.slice(0,event.value);
    this.onValoresCambiados();
  }


}
