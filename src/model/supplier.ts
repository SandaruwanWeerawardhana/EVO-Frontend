export default class supplier {
  userId: number;
  profileId: number;
  businessName: string;
  SupplierType: string;
  email: string;
  phoneNumber: string;
  description: string;
  website: string;
  imgUrl: string;
  rating: number;

  constructor(
    userId: number,
    profileId: number,
    businessName: string,
    SupplierType: string,
    email: string,
    phoneNumber: string,
    description: string,
    website: string,
    imgUrl: string,
    rating: number
  ) {
    this.userId = userId;
    this.profileId = profileId;
    this.businessName = businessName;
    this.SupplierType = SupplierType;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.website = website;
    this.imgUrl = imgUrl;
    this.rating = rating;
  }
}
