import { Component, OnDestroy, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Subscription } from 'rxjs';
import { dataBars } from '../data/data';
import { AcotadorDatosService } from '../servicios/acotador-datos.service';

@Component({
  selector: 'app-graf-barras',
  templateUrl: './graf-barras.component.html',
  styleUrls: ['./graf-barras.component.css']
})
export class GrafBarrasComponent implements OnInit, OnDestroy{

  suscripcionDatos: Subscription = new Subscription();

  dataBars: any[] = [];
  view: [number, number] = [700, 300];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Meses';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Ventas';
  legendTitle: string = 'Productos';

  colorScheme: Color = { domain: ['#5AA454', '#C7B42C', '#AAAAAA', '#2E4F4C', '#B7C6B9'],
                         group: ScaleType.Ordinal,
                         selectable: true,
                         name: 'Customer Usage', };

  constructor(private acotadorDatosService : AcotadorDatosService){}

  ngOnInit() {
   this.suscripcionDatos = this.acotadorDatosService.datosBarraSeleccionadosAct
    .subscribe(
      (datosActuales) => {
        this.dataBars = datosActuales;
      }
    );
    this.dataBars = this.acotadorDatosService.getDatosBarraSeleccionados();
  }

  ngOnDestroy(): void {
    this.suscripcionDatos.unsubscribe();
  }

  onSelect(data : any): void {}

  onActivate(data : any): void {}

  onDeactivate(data : any): void {}
}
