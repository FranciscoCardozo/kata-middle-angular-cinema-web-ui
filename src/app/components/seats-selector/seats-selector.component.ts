import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-seats-selector',
  imports: [CommonModule],
  templateUrl: './seats-selector.component.html',
  styleUrls: ['./seats-selector.component.scss']
})
export class SeatsSelectorComponent {
  seats: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
  selectedSeats: number[] = [];
  @Input() showModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() seatsSelected = new EventEmitter<number[]>();

  selectSeat(seat: number): void {
    const index = this.selectedSeats.indexOf(seat);
    if (index === -1) {
      this.selectedSeats.push(seat);
    } else {
      this.selectedSeats.splice(index, 1);
    }
    console.log('SEATS SELECTED:', this.selectedSeats);
  }

  finalizeSelection(): void {
    this.seatsSelected.emit(this.selectedSeats);
    this.closeModal();
  }

  closeModal(): void {
    console.log('CLOSING MODAL');
    this.closeModalEvent.emit(true);
  }
}
