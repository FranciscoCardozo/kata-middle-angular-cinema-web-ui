import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, output, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-seats-selector',
  imports: [CommonModule],
  templateUrl: './seats-selector.component.html',
  styleUrls: ['./seats-selector.component.scss']
})
export class SeatsSelectorComponent implements OnInit, OnChanges {
  seats: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
  selectedSeats: number[] = [];
  @Input() selection: number[] = [];
  @Input() showModal: boolean = false;
  @Input() roomInfo!: any;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() seatsSelected = new EventEmitter<number[]>();

  ngOnInit(): void {
      this.selection.forEach(seat => {
        this.selectSeat(seat);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['roomInfo']) {
      console.log('El valor de miDato ha cambiado a:', this.roomInfo);
      this.seats = Array.from({ length: this.roomInfo?.capacityRoom}, (_, i) => i + 1);
      this.roomInfo?.reservedRooms?.forEach((seat: number) => {
        this.selectedSeats.push(seat);
      });
    }
  }

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
