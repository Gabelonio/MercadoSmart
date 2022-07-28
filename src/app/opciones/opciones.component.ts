import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Hashtag } from '../modelos/hashtag.model';
import { AcotadorDatosService } from '../servicios/acotador-datos.service';

const MESES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css'],
})
export class OpcionesComponent {

  formatLabel(value: number) {
    return MESES[value-1];
  }

  hashtags: Hashtag[] = [
    {
      nombre : "#Guerra", isSeleccionado : false
    },
    {
      nombre : "#Festividades", isSeleccionado : false
    },
    {
      nombre : "#Maquillaje", isSeleccionado : false
    },
    {
      nombre : "#Moda", isSeleccionado : false
    },
    {
      nombre : "#Automoviles", isSeleccionado : false
    }
  ];

  rangoFechaSlider : number = 1;

/*   rangoFechaSeleccionado = 'Enero - Marzo';

  rangoFechas = [
    {
      rango: 'Enero - Marzo'
    },
    {
      rango: 'Abril - Junio'
    },    {
      rango: 'Julio - Septiembre'
    },    {
      rango: 'Octubre - Diciembre'
    },
  ]; */

  constructor(private servicioAcotadorDatos : AcotadorDatosService) {}

  onSliderCambiado(event : MatSliderChange){
    this.rangoFechaSlider = (event.value)?event.value:1;
    this.servicioAcotadorDatos.onOpcionesSeleccionadas(this.hashtags, this.rangoFechaSlider);
  }

  onValoresCambiados(event: any) {
    console.log(this.rangoFechaSlider);
    this.servicioAcotadorDatos.onOpcionesSeleccionadas(this.hashtags, this.rangoFechaSlider);
  }
}
