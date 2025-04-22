export default class CustomerPayment {
  id: string;
  date: string;
  businessName: string;
  packageName: string;
  phoneNumber: string;
  packagePrice: number;
  name: string;
  email: string;

  constructor(
    id: string,
    date: string,
    businessName: string,
    packageName: string,
    phoneNumber: string,
    packagePrice: number,
    name: string,
    email: string
  ) {
    this.id = id;
    this.date = date;
    this.businessName = businessName;
    this.packageName = packageName;
    this.phoneNumber = phoneNumber;
    this.packagePrice = packagePrice;
    this.name = name;
    this.email = email;
  }
}
