export default class ProfileCustomer{
    id:number;
    fullName:string;
    email:string;
    phoneNumber:string;
    address:string;
   gender:string;

     constructor(id:number,fullName:string,email:string,address:string,gender:string,phoneNumber:string){
        this.id=id;
        this.fullName=fullName;
        this.email=email;
        this.phoneNumber=phoneNumber
        this.address=address;
        this.gender=gender
     }
}