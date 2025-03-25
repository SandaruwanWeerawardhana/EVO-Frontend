import { Component } from '@angular/core';
import Adgenda from '../../../model/EventDetails';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-agenda',
  imports: [NgFor],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  adgenda: Adgenda[] = [
    
    new Adgenda("Wedding", "Shangri-La", new Date("2025-06-15"), "Avinash Deshan"),
    
    
      
    
  ]
 
  
}
