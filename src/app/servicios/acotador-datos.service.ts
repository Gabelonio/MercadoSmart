import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as data from '../data/datos.json';
import { dataBarraBusqueda } from '../modelos/dataBarraBusqueda';
import { Hashtag } from '../modelos/hashtag.model';

const MESES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

@Injectable({
  providedIn: 'root'
})
export class AcotadorDatosService {
  datosSeleccionadosAct = new Subject<any[]>();
  datosBarraSeleccionadosAct = new Subject<any[]>();

  datosSeleccionados : dataBarraBusqueda[] = [];

  rangoFechasSeleccionado : number[] = [1, 2];

  constructor() {
    (data as any).default.map((item : dataBarraBusqueda) =>{
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

  private filtrarDatos(hashtagsSeleccionados : string[], rangoFechasSeleccionado : number[]){
    const datosFiltrados = this.datosSeleccionados.map((item) => {
      return {
        "categoria" : item.categoria,
        "series" : item.series.slice(rangoFechasSeleccionado[0] - 1,rangoFechasSeleccionado[1])
      }
    }).filter((item) =>{return hashtagsSeleccionados.indexOf(item.categoria) > -1})
    this.datosSeleccionadosAct.next(this.darFormatoDatos(datosFiltrados));
    this.datosBarraSeleccionadosAct.next(this.darFormatoDatosBarra(datosFiltrados));
  }

  private darFormatoDatos(dataBarraBusqueda : dataBarraBusqueda[]){
    return dataBarraBusqueda.map((item) => {
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

  private darFormatoDatosBarra(dataBarraBusqueda : dataBarraBusqueda[]){
    let datosPorMes = dataBarraBusqueda.map((item) => {
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

  onOpcionesSeleccionadas(hashtags : Hashtag[], rangoFechas : number){
    /* switch(rangoFechas){
      case 'Enero - Marzo' : {
        this.rangoFechasSeleccionado = [1,3];
        break;
      }
      case 'Abril - Junio' : {
        this.rangoFechasSeleccionado = [4,6];
        break;
      }
      case 'Julio - Septiembre' : {
        this.rangoFechasSeleccionado = [7,9];
        break;
      }
      case 'Octubre - Diciembre' : {
        this.rangoFechasSeleccionado = [10,12];
        break;
      }
    } */
    this.filtrarDatos(
      hashtags.filter(item => item.isSeleccionado).map(item => item.nombre),
      [1,rangoFechas]);
  }


}
