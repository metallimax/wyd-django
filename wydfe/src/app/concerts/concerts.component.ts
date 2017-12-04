import { Component, OnInit } from '@angular/core';
import { Concert } from '../concert';
import { ConcertService } from '../concert.service';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {
  concerts: Concert[];

  selectedConcert: Concert;

  constructor(private concertService: ConcertService, public urlService: UrlService) { }

  getConcerts(): void {
    this.concertService.getConcerts()
      .subscribe(concerts => this.concerts = concerts);
  }

  ngOnInit() {
    this.getConcerts();
  }

  onSelect(concert: Concert): void {
    this.selectedConcert = concert;
  }

}
