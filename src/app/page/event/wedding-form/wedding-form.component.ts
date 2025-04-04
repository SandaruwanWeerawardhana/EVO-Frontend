import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wedding-form',
  imports: [RouterLink,NgIf],
  templateUrl: './wedding-form.component.html',
  styleUrl: './wedding-form.component.css'
})
export class WeddingFormComponent {

  nextpageNumber:number=1;

  nextButtonOnClick(page:number){
    
    this.nextpageNumber=page;
    
  }

}
