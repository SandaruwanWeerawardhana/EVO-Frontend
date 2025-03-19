 export default class Booking{
  date:string;
  name:string;
  type:string;
  status:string;

  constructor(date:string,name:string,type:string,status:string){
    this.date=date;
    this.name=name;
    this.type=type;
    this.status=status;
  }
}
