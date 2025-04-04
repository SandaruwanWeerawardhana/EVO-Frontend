import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-annivesary-form',
  imports: [RouterLink],
  templateUrl: './annivesary-form.component.html',
  styleUrl: './annivesary-form.component.css'
})
export class AnnivesaryFormComponent {
  anniversaryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.anniversaryForm = this.fb.group({
      anniversaryYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      wifeName: ['', [Validators.required, Validators.minLength(2)]],
      husbandName: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.maxLength(500)]]
    });
  }

  onSubmit() {
    if (this.anniversaryForm.valid) {
      console.log(this.anniversaryForm.value);
    }
  }

  isActive = false;
  toggleHearts() {
    this.isActive = true;
    
    setTimeout(() => {
      this.isActive = false;
    }, 3000); 
  }

}
