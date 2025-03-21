import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Inventory  from '../../../model/Inventory'; 

@Component({
  selector: 'app-view-inventory',
  imports: [CommonModule],
  templateUrl: './view-inventory.component.html',
  styleUrl: './view-inventory.component.css'
})
export class ViewInventoryComponent {

  inventories: Inventory[] = [];

  loadData():void{
    this.inventories.push(new Inventory('Camera','https://images.pexels.com/photos/249597/pexels-photo-249597.jpeg?auto=compress&cs=tinysrgb&w=600','with 2 lens','CAMERA'));
    this.inventories.push(new Inventory('Laptop', 'https://www.example.com/laptop', '15 inch screen', 'LAPTOP'));
    this.inventories.push(new Inventory('Smartphone', 'https://www.example.com/smartphone', '128GB AJFRNOKASDF;JASDFJ;OAHJKLG;KSJSGFERKERJG;LKSJFGKLDHJG;LDJHFG;GJKLDFNssadvsnv;ooilhdaflkasdjvjashdvjkaFJGHJ storage', 'SMARTPHONE'));
    this.inventories.push(new Inventory('Headphones', 'https://www.example.com/headphones', 'Noise-cancelling', 'HEADPHONES'));
    this.inventories.push(new Inventory('Smartwatch', 'https://www.example.com/smartwatch', 'Heart rate monitor', 'SMARTWATCH'));
    this.inventories.push(new Inventory('Smartwatch', 'https://www.example.com/smartwatch', 'Heart rate monitor', 'SMARTWATCH'));
    this.inventories.push(new Inventory('Smartwatch', 'https://www.example.com/smartwatch', 'Heart rate monitor', 'SMARTWATCH'));
    this.inventories.push(new Inventory('Smartwatch', 'https://www.example.com/smartwatch', 'Heart rate monitor', 'SMARTWATCH'));
    this.inventories.push(new Inventory('Smartwatch', 'https://www.example.com/smartwatch', 'Heart rate monitor', 'SMARTWATCH'));

  }

  constructor(){
    this.loadData();
  }
}
