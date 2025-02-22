// filepath: /c:/Users/Usuario/OneDrive/Documents/Kata Semi-senior/Front/kata-middle-angular-cinema-web-ui/src/app/components/reserve/reserve.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeatsSelectorComponent } from "../seats-selector/seats-selector.component";
import { ConfirmComponent } from "../confirm/confirm.component";

@Component({
  selector: 'app-reserve',
  imports: [CommonModule, SeatsSelectorComponent, ConfirmComponent],
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {
  dates: Date[] = [];
  selectedDate: Date | null = null;
  availableTimes: { time: string, available: boolean }[] = [];
  selectedTime: string | null = null;
  showSeatsModal: boolean = false;
  showFormModal: boolean = false;
  selectedSeats: number[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const movie = navigation?.extras.state?.['movie'];
    console.log(movie);
  }

  ngOnInit(): void {
    this.generateDates();
    this.generateTimes();
  }

  generateDates(): void {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      this.dates.push(date);
    }
  }

  openSeatsSelector(): void {
    this.showSeatsModal = true;
  }

  onCloseModalEvent(event: boolean){
    console.log('Cerrando modal', event);
    this.showSeatsModal = false;
  }

  onCloseFormModalEvent(event: boolean){
    console.log('Cerrando modal', event);
    this.showFormModal = false;
  }

  onSeatsSelected(seats: any): void {
    console.log('Sillas seleccionadas:', seats);
    this.selectedSeats = seats;
    this.showSeatsModal = false;
  }

  generateTimes(): void {
    this.availableTimes = [
      { time: '10:00 AM', available: true },
      { time: '1:00 PM', available: false },
      { time: '4:00 PM', available: true },
      { time: '7:00 PM', available: true },
      { time: '10:00 PM', available: false }
    ];
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
  }

  openFormModal(): void {
    this.showFormModal = true;
  }

  selectSeats(): void {
    // Lógica para seleccionar sillas disponibles
    console.log('Seleccionar sillas disponibles');
  }

  selectTime(time: { time: string, available: boolean }): void {
    if (time.available) {
      this.selectedTime = time.time;
    }
  }
}
