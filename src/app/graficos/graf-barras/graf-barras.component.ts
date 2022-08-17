import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-graf-barras',
  templateUrl: './graf-barras.component.html',
  styleUrls: ['./graf-barras.component.css']
})
export class GrafBarrasComponent implements OnInit, OnDestroy{
  @Input() dataBarsSeleccionados : any[] = [];
  @Input() subjectDatosBarraSeleccionados : Subject<any[]> = new Subject<any[]>();

  dataBars: any[] = [];
  suscripcionDatos: Subscription = new Subscription();
  view: [number, number] = [660, 380];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Mes';
  yAxisLabel: string = 'Interacciones';
  legendTitle: string = 'Hashtags';

  colorScheme: Color = { domain: ['#5AA454', '#C7B42C', '#AAAAAA', '#2E4F4C', '#B7C6B9'],
                         group: ScaleType.Ordinal,
                         selectable: true,
                         name: 'Customer Usage', };

  constructor(){}

  ngOnInit() {
    this.suscripcionDatos = this.subjectDatosBarraSeleccionados
    .subscribe(
      (datosActuales) => {
        this.dataBars = datosActuales;
      }
    );
    this.dataBars = this.dataBarsSeleccionados;
  }

  ngOnDestroy(): void {
    this.suscripcionDatos.unsubscribe();
  }

  onSelect(data : any): void {}

  onActivate(data : any): void {}

  onDeactivate(data : any): void {}
}
