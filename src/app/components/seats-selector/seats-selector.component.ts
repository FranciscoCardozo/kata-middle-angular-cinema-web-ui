import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-seats-selector',
  imports: [CommonModule],
  templateUrl: './seats-selector.component.html',
  styleUrl: './seats-selector.component.scss'
})

export class SeatsSelectorComponent {
  seats: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
  @Output() seatSelected = new EventEmitter<number>();
  @Output() closeModalEvent = new EventEmitter<boolean>();

  selectSeat(seat: number): void {
    this.seatSelected.emit(seat);
    this.closeModal();
  }

  closeModal(): void {
    this.closeModalEvent.emit(true);
  }
}
