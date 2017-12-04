import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  records: Record[];

  selectedRecord: Record;

  constructor(private recordService: RecordService, public urlService: UrlService) { }

  getRecords(): void {
    this.recordService.getRecords()
      .subscribe(records => this.records = records);
  }

  ngOnInit() {
    this.getRecords();
  }

  onSelect(record: Record): void {
    this.selectedRecord = record;
  }

}
