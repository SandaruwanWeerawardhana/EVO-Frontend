export default class PhotographerReview{
  reviewId:number;
  rating:string;
  date:string;
  comment:string;

  constructor(reviewId:number, rating:string, date:string, comments:string){
    this.reviewId=reviewId;
    this.rating=rating;
    this.date=date;
    this.comment=comments
  }


}
