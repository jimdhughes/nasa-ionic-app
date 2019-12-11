import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  constructor(private httpClient: HttpClient) {}

  public GetApod(date: Date) {
    const endpoint = `https://api.jimdhughes.com/api/v1/apod/${date
      .toISOString()
      .substring(0, 10)}`;
    return this.httpClient.get(endpoint, { headers: { accept: 'application/json' } });
  }

  public GetNeos(date: Date) {
    const endpoint = `https://api.jimdhughes.com/api/v1/neos/${date
      .toISOString()
      .substring(0, 10)}`;
    return this.httpClient.get(endpoint, { headers: { accept: 'application/json' } });
  }
}
