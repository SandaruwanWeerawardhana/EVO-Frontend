import { Component } from '@angular/core';
import Venue from '../../../../model/Venue';
import PropertyImage from '../../../../model/PropertyImage';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-venue-page-popup',
  imports: [FormsModule,CommonModule],
  templateUrl: './venue-page-popup.component.html',
  styleUrl: './venue-page-popup.component.css'
})


export class VenuePagePopupComponent {

  venue!: Venue;
  image: PropertyImage[] = [
    {"id":1 , "src" :"https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg"},
    {"id":1 , "src" :"https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg"},
    {"id":1 , "src" :"https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg"},
    {"id":1 , "src" :"https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg"},
  ]

  constructor(){
    this.getData();
  }
     getData(){
      this.venue=  new Venue(1,1,"Shangrila","horana","Hotel","Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quod adipisci ea, at rerum nemo illum necessitatibus aspernatur cumque maiores inventore aliquid tenetur quisquam. Harum distinctio quam dolor sint dolore,",1000);
    }
}
