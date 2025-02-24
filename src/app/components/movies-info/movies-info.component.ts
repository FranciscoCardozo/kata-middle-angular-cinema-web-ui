import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { FetchService } from '../../services/fetchService/fetchService';
import { config } from '../../config';
import { MoviesInfo } from '../../interfaces/moviesInfo.interface';
import { Router } from '@angular/router';
import { CinemaService } from '../../services/cinemaService/cinemaService';
import Utils from '../../utils/utils';

@Component({
  selector: 'app-movies-info',
  imports: [CommonModule],
  templateUrl: './movies-info.component.html',
  styleUrl: './movies-info.component.scss'
})
export class MoviesInfoComponent implements OnInit, AfterViewInit, AfterContentInit {

  constructor(private fetchService: FetchService, private router: Router, private cinemaService: CinemaService) {}

  moviesResponse: any;
  moviesInfoObject: MoviesInfo[] = [];


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.cinemaService.getMovies().then(response => {
      console.log(response);
      this.moviesResponse = response;
      this.mapMoviesObject(response);
      console.log(this.moviesInfoObject);
    })
    /*
    const headers = {
      "Authorization": config.apiToken,
      "accept": "application/json"
    }

    this.fetchService.getFetch(config.getMoviInfoUrl, 'get', headers).then(response => {
      this.moviesResponse = response;
      console.log(this.moviesResponse);
      this.mapMoviesObject(response.results);
    }).catch(error => {
      console.error(error);
    });
    */
  }

  ngAfterContentInit(): void {

  }

  onCardClick(position: number){
    console.log(position);
    const selectedMovie = this.moviesInfoObject[position];
    this.router.navigate(['/reservation'], { state: { movie: selectedMovie } });
  }

  mapMoviesObject(response:any[]) {
    response.forEach((movie: any) => {
      this.moviesInfoObject.push({
        img: `${config.imgUrl}/${Utils.getDynamoProp(movie.movie_img_path)}`,
        title: Utils.getDynamoProp(movie.movie_title),
      });
    });
  }
}
