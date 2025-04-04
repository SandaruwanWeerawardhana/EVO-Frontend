import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-birthday-party-form',
  imports: [RouterLink, FormsModule],
  templateUrl: './birthday-party-form.component.html',
  styleUrl: './birthday-party-form.component.css'
})

export class BirthdayPartyFormComponent {

}
