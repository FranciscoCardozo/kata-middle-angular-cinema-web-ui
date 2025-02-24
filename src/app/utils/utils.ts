import constants from "./constants";

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
}
