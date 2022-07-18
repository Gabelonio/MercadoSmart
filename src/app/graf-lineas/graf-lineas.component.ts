import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { data } from '../data/data';

@Component({
  selector: 'app-graf-lineas',
  templateUrl: './graf-lineas.component.html',
  styleUrls: ['./graf-lineas.component.css']
})
export class GrafLineasComponent implements OnInit {

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


  ngOnInit() {
    Object.assign(this, { data });
  }

  onSelect(data : any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
