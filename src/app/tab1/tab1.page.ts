import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  apod: any;
  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    const date = new Date();
    this.nasaService.GetApod(date).subscribe(apod => (this.apod = apod));
  }
}
