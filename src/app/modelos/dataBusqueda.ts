export class dataBusqueda {
  constructor(public nombreProducto: string, public busquedasMes : {mes : string, cantidad : number}[]){}
}
