import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as data from '../data/datos.json';
import { dataBusqueda } from '../modelos/dataBusqueda.model';
import { Hashtag } from '../modelos/hashtag.model';
import { dataTag } from '../modelos/tag.model';

const MESES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

@Injectable({
  providedIn: 'root'
})
export class AcotadorDatosTendenciasService {
  datosSeleccionadosAct = new Subject<any[]>();
  datosBarraSeleccionadosAct = new Subject<any[]>();
  tagsRelevantes = new Subject<dataTag[]>();


  datosSeleccionados : dataBusqueda[] = [];

  constructor() {
    (data as any).default.map((item : dataBusqueda) =>{
      this.datosSeleccionados.push(item);
    });
    this.datosSeleccionadosAct.next(this.darFormatoDatos(this.datosSeleccionados));
    this.datosBarraSeleccionadosAct.next(this.darFormatoDatosBarra(this.datosSeleccionados));
  }

  public getDatosSeleccionados(){
    return this.darFormatoDatos(this.datosSeleccionados);
  }

  public getDatosBarraSeleccionados(){
    return this.darFormatoDatosBarra(this.datosSeleccionados);
  }

  public getTagsRelevantes(){
    return this.actualizarTagsRelevantes(this.datosSeleccionados);
  }

  private filtrarDatos(hashtagsSeleccionados : string[], rangoFechasSeleccionado : number[]){
    const datosFiltrados = this.datosSeleccionados.map((item) => {
      return {
        "categoria" : item.categoria,
        "series" : item.series.slice(rangoFechasSeleccionado[0] - 1,rangoFechasSeleccionado[1])
      }
    }).filter((item) =>{return hashtagsSeleccionados.indexOf(item.categoria) > -1})
    this.tagsRelevantes.next(this.actualizarTagsRelevantes(datosFiltrados));
    this.datosSeleccionadosAct.next(this.darFormatoDatos(datosFiltrados));
    this.datosBarraSeleccionadosAct.next(this.darFormatoDatosBarra(datosFiltrados));
  }

  public actualizarTagsRelevantes(dataObtenida : any[]){
    const datos : dataTag[] = dataObtenida.
    map((item) => {
      return{
        "categoria" : item.categoria,
        "num_likes" : item.series.
        map( (item :any) => item.num_likes).
        reduce((itemprevio : any, itemactual : any) =>  itemprevio + itemactual),
        "num_comments" : item.series.
        map( (item :any) => item.num_comments).
        reduce((itemprevio : any, itemactual : any) =>  itemprevio + itemactual),
        "num_retweets" : item.series.
        map( (item :any) => item.num_retweets).
        reduce((itemprevio : any, itemactual : any) =>  itemprevio + itemactual),
      }
    }).
    sort((a, b) => (a.num_comments + a.num_likes + a.num_retweets) - (b.num_comments + b.num_likes + b.num_retweets));
    return [datos[0],datos[datos.length-1]];
  }



  private darFormatoDatos(dataBusqueda : dataBusqueda[]){
    return dataBusqueda.map((item) => {
      return {
        "name" : item.categoria,
        "series" : item.series.map((item)=> {
          return {
            "name" : MESES[item.mes-1],
            "value" : item.num_comments + item.num_likes + item.num_retweets
          }
        })
      }
    })
  }

  private darFormatoDatosBarra(dataBusqueda : dataBusqueda[]){
    let datosPorMes = dataBusqueda.map((item) => {
      return item.series.map((mes)=> {
          return {
            "mes" : MESES[mes.mes-1],
            "name" : item.categoria,
            "value" : mes.num_comments + mes.num_likes + mes.num_retweets
          }
    })})
    return Array.from(
      datosPorMes.flat().reduce((a,{mes, ...rest})=>{
        return a.set(mes, [rest].concat(a.get(mes)||[]));
      }, new Map())
    ).map(([name, series])=>({name,series}));
  }

  onOpcionesSeleccionadas(hashtags : Hashtag[], fechaInicial : number, fechaFinal : number){
    this.filtrarDatos(
      hashtags.filter(item => item.isSeleccionado).map(item => item.nombre),
      [fechaInicial, fechaFinal]);
  }


}
