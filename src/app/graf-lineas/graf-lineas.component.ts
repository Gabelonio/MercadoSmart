import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Subscription } from 'rxjs';
import { data } from '../data/data';
import { AcotadorDatosService } from '../servicios/acotador-datos.service';

@Component({
  selector: 'app-graf-lineas',
  templateUrl: './graf-lineas.component.html',
  styleUrls: ['./graf-lineas.component.css']
})
export class GrafLineasComponent implements OnInit {

  suscripcionDatos: Subscription = new Subscription();

  data: any[] = [];
  view: [number, number] = [700, 380];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Mes';
  yAxisLabel: string = 'Ventas';
  legendTitle: string = 'Productos';
  timeline: boolean = true;

  colorScheme: Color = { domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
                         group: ScaleType.Ordinal,
                         selectable: true,
                         name: 'Customer Usage', };

  constructor(private acotadorDatosService : AcotadorDatosService){}

  ngOnInit() {
    this.suscripcionDatos = this.acotadorDatosService.datosSeleccionadosAct
    .subscribe((datosActuales) => {
        this.data = datosActuales;
      }
    );
    this.data = this.acotadorDatosService.getDatosSeleccionados();
  }

  ngOnDestroy(): void {
    this.suscripcionDatos.unsubscribe();
  }

  onSelect(data : any): void {}
  onActivate(data: any): void {}
  onDeactivate(data: any): void {}
}
