export default class WeddingForm{
    id:number;
    brideName:string;
    groomName:string;
    culture:string;
    capacity:number;

    constructor(id:number,brideName:string,groomName:string,culture:string,capacity:number){
        this.id = id;
        this.brideName = brideName;
        this.groomName = groomName;
        this.culture = culture;
        this.capacity = capacity;
    }

}