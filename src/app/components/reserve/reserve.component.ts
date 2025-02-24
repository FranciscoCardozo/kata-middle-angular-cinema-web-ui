// filepath: /c:/Users/Usuario/OneDrive/Documents/Kata Semi-senior/Front/kata-middle-angular-cinema-web-ui/src/app/components/reserve/reserve.component.ts
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeatsSelectorComponent } from "../seats-selector/seats-selector.component";
import { ConfirmComponent } from "../confirm/confirm.component";
import { CinemaService } from '../../services/cinemaService/cinemaService';
import Utils from '../../utils/utils';

@Component({
  selector: 'app-reserve',
  imports: [CommonModule, SeatsSelectorComponent, ConfirmComponent],
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements AfterViewInit {
  availableRooms: any[] = [];
  selectedDate: Date | null = null;
  selectedTime: string | null = null;
  showSeatsModal: boolean = false;
  showFormModal: boolean = false;
  selectedSeats: number[] = [];
  reservationsnfo!: any[];
  roomInfo!: any;
  selectedRoom: any;

  constructor(private router: Router, private cinemaService: CinemaService) {
    const navigation = this.router.getCurrentNavigation();
    const movie = navigation?.extras.state?.['movie'];
    console.log(movie);
  }

  ngAfterViewInit(): void {
    this.cinemaService.getRooms().then((roomsInfo)=> {
      this.reservationsnfo = roomsInfo;
      this.assignRooms();
    })
  }

  assignRooms(): void {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      const selectedRoom = Utils.aleatoryRoomAsign(this.reservationsnfo);
      const reservedHours = Utils.getDynamoProp(this.reservationsnfo[Number(selectedRoom.idRoom)-1]['room_reservate_hours']);
      const availableTimes = Utils.validAvailableTimes(JSON.parse(reservedHours));
      const reservedRooms = JSON.parse(Utils.getDynamoProp(this.reservationsnfo[Number(selectedRoom.idRoom)-1]['room_reservations']));
      date.setDate(today.getDate() + i);
      this.availableRooms.push({
        ...selectedRoom,
        date,
        availableTimes,
        reservedRooms
      });
    }
  }

  openSeatsSelector(index: number): void {
    this.selectedRoom = this.availableRooms[index];
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
