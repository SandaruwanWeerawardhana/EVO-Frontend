
type VenueType = "RESTAURANT" | "VILLA" | "HOTEL";

export default class Venue {
    name: string;
    id: number;
    supplierId: number;
    location: string;
    type: VenueType;
    price:number;
    image: string; 

    constructor(name: string, id: number, supplierId: number, location: string, type: VenueType,price:number, image: string) {
        this.name = name;
        this.id = id;
        this.supplierId = supplierId;
        this.location = location;
        this.type = type;
        this.price=price;
        this.image = image; 
    }
}
