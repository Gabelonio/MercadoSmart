import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { dataBars } from '../data/data';

@Component({
  selector: 'app-graf-barras',
  templateUrl: './graf-barras.component.html',
  styleUrls: ['./graf-barras.component.css']
})
export class GrafBarrasComponent implements OnInit {

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

  colorScheme: Color = { domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
                         group: ScaleType.Ordinal,
                         selectable: true,
                         name: 'Customer Usage', };

  ngOnInit() {
    Object.assign(this, { dataBars })
  }

 onSelect(data : any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data : any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data : any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
