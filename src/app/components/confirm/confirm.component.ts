import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CinemaService } from '../../services/cinemaService/cinemaService';
import Utils from '../../utils/utils';
@Component({
  selector: 'app-confirm',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})
export class ConfirmComponent implements OnChanges{
  confirmForm: FormGroup;
  @Input() showModal: boolean = false;
  @Input() movieInfo: any;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private cinemaService: CinemaService) {
    this.confirmForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      secondLastName: [''],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
      if (changes['movieInfo']) {
        console.log('El valor de miDato ha cambiado a:', this.movieInfo);
      }
    }

  closeModal(): void {
    this.closeModalEvent.emit(true);
  }

  confirmReservation(): void {
    if (this.confirmForm.valid) {
      console.log('Reservation confirmed', this.confirmForm.value);
      const body = Utils.mapConfirmationBody(this.movieInfo, this.confirmForm.value);
      console.log(body);

      this.cinemaService.confirmReservation(body)
        .then(()=> {
          console.log('RESPONSE OK');
        })
        .catch(e => {

        });
      this.closeModal();
    } else {
      console.log('Form is invalid');
    }
  }
}
