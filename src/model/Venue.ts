export default class Venur{

  id:number;
  supplierId: number;
  location: string ;
  type:string;
  name:string
  about:string;
  capacity:number;

  constructor(id:number , supplierId:number ,name:string, location :string , type: string , about:string , capacity:number){
      this.id=id;
      this.supplierId=supplierId;
      this.name = name ;
      this.location=location;
      this.type= type;
      this.about = about;
      this.capacity =capacity;
  }
}
