import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Venue from '../../../../model/Venue';
@Component({
    selector: 'app-venue-dashboard',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './venue-dashboard.component.html',
    styleUrl: './venue-dashboard.component.css',
})
export class VenueDashboardComponent {


  // this.id=id;
  // this.supplierId=supplierId;
  // this.name = name ;
  // this.location=location;
  // this.type= type;
  // this.price=price;
  // this.image=image;
  // this.about = about;
  // this.capacity =capacity;



  public venue: Venue[] = [
    {
      id: 1,
      supplierId: 1,
        name: "shangrila",
        location: "panadura",
        type: 'VILLA',
        price:25000,
        image: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
        about:"bla bla",
        capacity:5
    },
    // {
    //     name: "galadari",
    //     id: 2,
    //     supplierId: 1,
    //     location: "colombo",
    //     type: 'RESTAURANT',
    //     price:25000,
    //     image: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg"
    // },
    // {
    //     name: "shangrila",
    //     id: 3,
    //     supplierId: 1,
    //     location: "kandy",
    //     type: 'HOTEL',
    //     price:25000,
    //     image: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg"
    // },
    // {
    //     name: "Galadari",
    //     id: 4,
    //     supplierId: 1,
    //     location: "horana",
    //     type: 'VILLA',
    //     price:25000,
    //     image: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg"
    // }
];
}

