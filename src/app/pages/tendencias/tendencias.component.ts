import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { dataTag } from 'src/app/modelos/tag.model';
import { AcotadorDatosTendenciasService } from 'src/app/servicios/acotador-datos-tendencias.service';

@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrls: ['./tendencias.component.css'],
})
export class TendenciasComponent {

  subjectDatosBarraSeleccionados : Subject<any[]> = new Subject<any[]>();
  subjectDatosSeleccionados : Subject<any[]> = new Subject<any[]>();
  subjectTagsRelevantes : Subject<dataTag[]> = new Subject<dataTag[]>();

  dataBars: any[] = [];
  data: any[] = [];
  tagsRelevantes: dataTag[] = [];

  constructor(private AcotadorDatosTendenciasService : AcotadorDatosTendenciasService) {
  }

  ngOnInit() {
    this.subjectDatosBarraSeleccionados = this.AcotadorDatosTendenciasService.datosBarraSeleccionadosAct;
    this.subjectDatosSeleccionados = this.AcotadorDatosTendenciasService.datosSeleccionadosAct;
    this.subjectTagsRelevantes = this.AcotadorDatosTendenciasService.tagsRelevantes;

    this.dataBars = this.AcotadorDatosTendenciasService.getDatosBarraSeleccionados();
    this.data = this.AcotadorDatosTendenciasService.getDatosSeleccionados();
    this.tagsRelevantes = this.AcotadorDatosTendenciasService.getTagsRelevantes();

  }
}
