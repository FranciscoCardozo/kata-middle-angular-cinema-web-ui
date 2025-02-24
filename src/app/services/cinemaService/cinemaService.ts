import { RegistryReservation } from './../../interfaces/registryReservation.interface';
import { Injectable } from "@angular/core";
import { config } from "../../config";
import { FetchService } from '../fetchService/fetchService';
import paths from "../../utils/paths";
import { RegistryRoom } from "../../interfaces/registryRoom.interface";
import { RegistryMovie } from "../../interfaces/registryMovie.interface";

@Injectable({
  providedIn: 'root'
})
export class CinemaService{
  constructor(private fetchService: FetchService){}

  public async getMovies(){
    return this.fetchService.getFetch(
      `${config.apiCinema}${paths.cinemaApi.getMovies}`,
      'GET'
    );
  }

  public async registryMovie(body: RegistryMovie){
    return this.fetchService.getFetch(
      `${config.apiCinema}${paths.cinemaApi.registryMovie}`,
      'POST',
      body
    );
  }

  public async getRooms(){
    return this.fetchService.getFetch(
      `${config.apiCinema}${paths.cinemaApi.getRooms}`,
      'GET'
    );
  }

  public async registryRoom(body: RegistryRoom){
    return this.fetchService.getFetch(
      `${config.apiCinema}${paths.cinemaApi.registryRoom}`,
      'POST',
      body
    );
  }

  public async getReservations(){
    console.log(`${config.apiCinema}${paths.cinemaApi.getReservations}`);
    return this.fetchService.getFetch(
      `${config.apiCinema}${paths.cinemaApi.getReservations}`,
      'GET',
    );
  }

  public async confirmReservation(body: RegistryReservation){
    return this.fetchService.getFetch(
      `${config.apiCinema}${paths.cinemaApi.registryReservation}`,
      'POST',
      {
        'Access-Control-Allow-Origin': '*'
      },
      body
    );
  }
}
