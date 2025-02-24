import { RegistryReservation } from "../interfaces/registryReservation.interface";
import constants from "./constants";
import uuid4 from 'uuid4';

export default class Utils{
  public static getDynamoProp(obj: any){
    return Object.entries(obj).map(([key,value]) => {
      console.log(obj, key);
      return obj[key];
    })[0];
  }

  public static aleatoryRoomAsign(availableRooms: any[]) {
    const indiceAleatorio = Math.floor(Math.random() * availableRooms.length);
    return {
      idRoom: Utils.getDynamoProp(availableRooms[indiceAleatorio]['room_id']),
      capacityRoom: Number(Utils.getDynamoProp(availableRooms[indiceAleatorio]['room_capacity']))
    };
  }

  public static validAvailableTimes(reservedHours: any[]){
    console.log(reservedHours[0]);
    return constants.defaultTimes.map((hours: any) => {
      console.log('HOURS', hours, hours.time === reservedHours[0]);
      return {
        time: hours.time,
        available: hours.time === reservedHours[0]
      }
    })
  }

  public static mapConfirmationBody(movieInfo: any, formInfo: any): RegistryReservation{
    return {
      uuid: uuid4(),
      date: new Date().toISOString(),
      firstName: formInfo.firstName,
      secondName: formInfo.middleName,
      surname: formInfo.lastName,
      secondSurname: formInfo.secondLastName,
      email: formInfo.email,
      phone: formInfo.phone,
      roomId: String(movieInfo.idRoom),
      movieId: movieInfo.selectedMovie.id,
      seatsReserved: JSON.stringify(movieInfo.selectedSeats),
      reservationHour: movieInfo.selectedHour
    }
  }
}
