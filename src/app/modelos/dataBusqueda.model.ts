export class dataBusqueda {
  constructor(public categoria : string, public series : { mes: number, num_likes : number, num_comments : number, num_retweets : number}[]){}
}
