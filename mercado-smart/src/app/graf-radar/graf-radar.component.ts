import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { data } from '../data/data';

@Component({
  selector: 'app-graf-radar',
  templateUrl: './graf-radar.component.html',
  styleUrls: ['./graf-radar.component.css']
})
export class GrafRadarComponent implements OnInit {

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

  colorScheme: Color = { domain: ['#99CCE5', '#FF7F7F'], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', };

  ngOnInit() {
    Object.assign(this, { data });
  }

  onSelect(event : any) {
    console.log(event);
  }
}
