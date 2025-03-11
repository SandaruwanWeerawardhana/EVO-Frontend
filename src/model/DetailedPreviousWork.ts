 export default class Customer{
  workId:number;
  ProfileId:number;
  title:string;
  description:string;
  completionDate:string;
  imageUrls:string;
  clientName:string;

  constructor(workId:number,ProfileId:number,title:string,description:string,completionDate:string,imageUrls:string,clientName:string){
    this.workId= workId;
    this.ProfileId=ProfileId;
    this.title=title;
    this.description=description;
    this.completionDate=completionDate;
    this.imageUrls=imageUrls;
    this.clientName=clientName;
  }
}
