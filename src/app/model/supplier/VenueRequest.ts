import { Supplier } from "./Supplier";
import { Venue } from "./Venue";

export class VenueRequest {
  venueRequestID: number;
  supplier: Supplier;
  venue: Venue;
  createdDateTime: string;
  status: boolean;

  constructor(
    venueRequestID: number,
    supplier: Supplier,
    venue: Venue,
    createdDateTime: string,
    status: boolean
  ) {
    this.venueRequestID = venueRequestID;
    this.supplier = supplier;
    this.venue = venue;
    this.createdDateTime = createdDateTime;
    this.status = status;
  }
}
