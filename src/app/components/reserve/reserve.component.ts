// filepath: /c:/Users/Usuario/OneDrive/Documents/Kata Semi-senior/Front/kata-middle-angular-cinema-web-ui/src/app/components/reserve/reserve.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeatsSelectorComponent } from "../seats-selector/seats-selector.component";

@Component({
  selector: 'app-reserve',
  imports: [CommonModule, SeatsSelectorComponent],
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {
  dates: Date[] = [];
  selectedDate: Date | null = null;
  availableTimes: { time: string, available: boolean }[] = [];
  selectedTime: string | null = null;

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
    // Lógica para abrir el modal de selección de sillas
  }

  onSeatSelected(seat: number): void {
    console.log('Silla seleccionada:', seat);
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
