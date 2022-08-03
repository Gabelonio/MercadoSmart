import { Component, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-graf-circulo',
  templateUrl: './graf-circulo.component.html',
  styleUrls: ['./graf-circulo.component.css']
})
export class GrafCirculoComponent implements OnInit {

  single: any[] = [];
  view: [number, number] = [700, 250];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = { domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
                         group: ScaleType.Ordinal,
                         selectable: true,
                         name: 'Customer Usage', };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data : any): void {}

  onActivate(data : any): void {}

  onDeactivate(data : any): void {}

  ngOnInit(): void {
  }



}
