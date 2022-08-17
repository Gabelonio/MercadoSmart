import { Component, Input, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-graf-lineas',
  templateUrl: './graf-lineas.component.html',
  styleUrls: ['./graf-lineas.component.css']
})
export class GrafLineasComponent implements OnInit {
  @Input() dataSeleccionada : any[] = [];
  @Input() subjectDatosSeleccionados : Subject<any[]> = new Subject<any[]>();

  data: any[] = [];
  suscripcionDatos: Subscription = new Subscription();
  view: [number, number] = [660, 380];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Mes';
  yAxisLabel: string = 'Interacciones';
  legendTitle: string = 'Hashtags';
  timeline: boolean = true;

  colorScheme: Color = { domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
                         group: ScaleType.Ordinal,
                         selectable: true,
                         name: 'Customer Usage', };

  constructor(){}

  ngOnInit() {
    this.suscripcionDatos = this.subjectDatosSeleccionados
    .subscribe(
      (datosActuales) => {
        this.data= datosActuales;
      }
    );
    this.data = this.dataSeleccionada;
  }

  ngOnDestroy(): void {
    this.suscripcionDatos.unsubscribe();
  }

  onSelect(data : any): void {}
  onActivate(data: any): void {}
  onDeactivate(data: any): void {}
}
