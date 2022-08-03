import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AcotadorDatosReporteService } from 'src/app/servicios/acotador-datos-reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  subjectDatosBarraSeleccionados : Subject<any[]> = new Subject<any[]>();

  dataBars: any[] = [];

  constructor(private AcotadorDatosReporteService : AcotadorDatosReporteService) {
  }

  ngOnInit() {
    this.subjectDatosBarraSeleccionados = this.AcotadorDatosReporteService.datosBarraSeleccionadosAct;
    this.dataBars = this.AcotadorDatosReporteService.getDatosBarraSeleccionados();
  }

}
