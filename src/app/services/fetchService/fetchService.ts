// filepath: /c:/Users/Usuario/OneDrive/Documents/Kata Semi-senior/Front/kata-middle-angular-cinema-web-ui/src/app/services/fetchService/fetch.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor() {}

  public getFetch(url: string, method: string, headers?: any, body?: any): Promise<any> {
    const options = {
      method: method,
      url: url,
      headers: headers,
      data: body
    };
    return axios(options)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
}
