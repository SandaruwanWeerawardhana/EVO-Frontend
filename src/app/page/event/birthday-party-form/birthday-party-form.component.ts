import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-birthday-party-form',
  imports: [RouterLink, FormsModule],
  templateUrl: './birthday-party-form.component.html',
  styleUrl: './birthday-party-form.component.css'
})
export class BirthdayPartyFormComponent {
  ownerName: string = '';
  email: string = '';
  eventdate: Date = new Date();
  starttime: Date = new Date();
  endtime: Date = new Date();

  formdata:FormData = new FormData();

  confirmButtonClicked(){
    this.formdata.append('ownerName', this.ownerName);
    this.formdata.append('email', this.email);
    this.formdata.append('eventdate', this.eventdate.toString());
    this.formdata.append('starttime', this.starttime.toString());
    this.formdata.append('endtime', this.endtime.toString());

    console.log(this.formdata.get('ownerName'));
    console.log(this.formdata.get('email'));
    console.log(this.formdata.get('eventdate'));
    console.log(this.formdata.get('starttime'));
    console.log(this.formdata.get('endtime'));
  }

}
