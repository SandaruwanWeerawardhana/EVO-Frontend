export default class Dashboard{
    type:string;
    date:string;
    status:string;
    description:string;
  
    constructor(type:string,date:string,status:string,description:string){
      this.type=type;
      this.date=date;
      this.status=status;
      this.description=description;
    }
  }