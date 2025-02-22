import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-confirm',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})
export class ConfirmComponent {
  confirmForm: FormGroup;
  @Input() showModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.confirmForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      secondLastName: [''],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  closeModal(): void {
    this.closeModalEvent.emit(true);
  }

  confirmReservation(): void {
    if (this.confirmForm.valid) {
      console.log('Reservation confirmed', this.confirmForm.value);
      this.closeModal();
    } else {
      console.log('Form is invalid');
    }
  }
}
