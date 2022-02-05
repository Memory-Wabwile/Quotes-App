export class Quotes {
        id: any;
        quote: any;
        author: any;
        name: any;
        completeDate:any
        constructor(id: number | any ,quote: string | any,author: string | any,name: string | any , completeDate:Date){
            this.id=id,
            this.quote=quote,
            this.author=author,
            this.name=name,
            this.completeDate=completeDate
        }
//     id!: number;
//     quote!: string;
//     author!: string;
//     name!: string;
}
 