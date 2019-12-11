import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  neos: any[];
  date: Date = new Date();
  constructor(private nasa: NasaService) {}
  ngOnInit(): void {
    this.nasa.GetNeos(this.date).subscribe((neos: any[]) => {
      this.neos = neos;
    });
  }
}
