import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-analitica',
  templateUrl: './analitica.component.html',
  styleUrls: ['./analitica.component.css']
})
export class AnaliticaComponent implements OnInit {

  @Input() tagsRelevantes : any[] = [];
  @Input() subjectTagsRelevantes : Subject<any[]> = new Subject<any[]>();

  datosRelevantes: any[] = [];
  suscripcionTags: Subscription = new Subscription();

  constructor(){}

  ngOnInit() {
    this.suscripcionTags = this.subjectTagsRelevantes
    .subscribe(
      (datosActuales) => {
        this.datosRelevantes= datosActuales;
      }
    );
    this.datosRelevantes= this.tagsRelevantes;
  }

  ngOnDestroy(): void {
    this.suscripcionTags.unsubscribe();
  }


}
