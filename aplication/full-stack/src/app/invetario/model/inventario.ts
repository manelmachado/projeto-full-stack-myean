export class Inventario {

    constructor(public id: number,
                public produto: string,
                public existencia: number,
                public preco: number,
                public provedor: string){}
}
