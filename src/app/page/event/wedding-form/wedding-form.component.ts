import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-wedding-form',
  imports: [RouterLink,NgIf,FormsModule],
  templateUrl: './wedding-form.component.html',
  styleUrl: './wedding-form.component.css'
})
export class WeddingFormComponent {

  bridesName:string="";
  groomsName:string="";
  guestscount:number=0;
  tradition:string="";
  weddingDate:Date=new Date();
  startTime:Date=new Date();
  endTime:Date=new Date();

  nextpageNumber:number=1;
  formdata:FormData=new FormData();

  minDate: string = new Date().toISOString().split('T')[0];



  constructor(private router:Router){}


  nextButtonOnClick(page: number) {
    if (!this.validateBasicInfo()) {
      return;
    }
    this.nextpageNumber = page;
  }



  validateBasicInfo(): boolean {
    const nameRegex = /^[A-Z][a-zA-Z]+(?:[-' ][A-Z][a-zA-Z]+)*$/;


    if (!this.bridesName.match(nameRegex)) {
      Swal.fire({
        title: 'Error',
        text: 'Please enter a valid bride\'s name (letters only, first letter uppercase).',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    if (!this.groomsName.match(nameRegex)) {
      Swal.fire({
        title: 'Error',
        text: 'Please enter a valid groom\'s name (letters only, first letter uppercase).',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    if (this.guestscount <= 0 || isNaN(this.guestscount)) {
      Swal.fire({
        title: 'Error',
        text: 'Guest count must be greater than zero.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }
    if (!this.tradition) {
      Swal.fire({
        title: 'Error',
        text: 'Tradition is required.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }
    return true;
  }


  validateDateInfo(): boolean {
    const currentDate = new Date();


    if (!this.weddingDate) {
      Swal.fire({
        title: 'Error',
        text: 'Wedding date is required.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    const weddingDay = new Date(this.weddingDate);
    weddingDay.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);


    if (weddingDay < currentDate) {
      Swal.fire({
        title: 'Error',
        text: 'Wedding date cannot be in the past.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }


    if (!this.startTime) {
      Swal.fire({
        title: 'Error',
        text: 'Start time is required.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    if (!this.endTime) {
      Swal.fire({
        title: 'Error',
        text: 'End time is required.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    const start = new Date(this.startTime);
    const end = new Date(this.endTime);


    if (weddingDay.getTime() === currentDate.getTime()) {
      const now = new Date();
      if (start < now) {
        Swal.fire({
          title: 'Error',
          text: 'Start time cannot be in the past.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return false;
      }
    }


    if (end <= start) {
      Swal.fire({
        title: 'Error',
        text: 'End time must be after start time.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    return true;
  }


  confirmButtonOnClick(){
   if(!this.validateDateInfo()){
      return;
   }

   this.router.navigate(["/event/venue-selection"]);

   this.formdata.append("brideName",this.bridesName);
   this.formdata.append("groomName",this.groomsName);
   this.formdata.append("guestsCount",this.guestscount.toString());
   this.formdata.append("tradition",this.tradition);
   this.formdata.append("weddingDate",this.weddingDate.toString());
   this.formdata.append("startTime",this.startTime.toString());
   this.formdata.append("endTime",this.endTime.toString());
   console.log(this.formdata);
  }
}
