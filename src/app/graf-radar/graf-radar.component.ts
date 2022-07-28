import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Subscription } from 'rxjs';
import { data } from '../data/data';
import { AcotadorDatosService } from '../servicios/acotador-datos.service';

@Component({
  selector: 'app-graf-radar',
  templateUrl: './graf-radar.component.html',
  styleUrls: ['./graf-radar.component.css']
})
export class GrafRadarComponent implements OnInit {

  suscripcionDatos: Subscription = new Subscription();
  data: any[] = [];

  view: [number, number] = [700, 350];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Mes';
  yAxisLabel: string = 'Ventas';
  legendTitle: string = 'Productos';
  autoScale: boolean = true;

  colorScheme: Color = { domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', };

  constructor(private acotadorDatosService : AcotadorDatosService){}

  ngOnInit() {
   this.suscripcionDatos = this.acotadorDatosService.datosSeleccionadosAct
    .subscribe(
      (datosActuales) => {
        this.data = datosActuales;
      }
    );
    this.data = this.acotadorDatosService.getDatosSeleccionados();
  }

  ngOnDestroy(): void {
    this.suscripcionDatos.unsubscribe();
  }

  onSelect(data : any): void {}

  onActivate(data : any): void {}

  onDeactivate(data : any): void {}
}
