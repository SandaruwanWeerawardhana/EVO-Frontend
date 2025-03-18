export default class Supplier {
  userId: number;
  profileId: number;
  businessName: string;
  SupplierType: string;
  email: string;
  password:string;
  phoneNumber: string;
  description: string;
  website: string;
  imgUrl: string;
  rating: number;
  uploadedFileUrl:string;

  constructor(
    userId: number,
    profileId: number,
    businessName: string,
    SupplierType: string,
    email: string,
    password:string,
    phoneNumber: string,
    description: string,
    website: string,
    imgUrl: string,
    rating: number,
    uploadedFileUrl:string
  ) {
    this.userId = userId;
    this.profileId = profileId;
    this.businessName = businessName;
    this.SupplierType = SupplierType;
    this.email = email;
    this.password=password;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.website = website;
    this.imgUrl = imgUrl;
    this.rating = rating;
    this.uploadedFileUrl=uploadedFileUrl;
  }
}
