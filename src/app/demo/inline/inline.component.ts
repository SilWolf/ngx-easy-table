import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { ConfigService } from './configuration.service';
import { Columns, Event } from 'ngx-easy-table';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css'],
  providers: [ConfigService],
})
export class InlineComponent implements OnInit {
  @ViewChild('phoneTpl', { static: true }) phoneTpl: TemplateRef<any>;
  public columns: Columns[];
  data: Company[] = [];
  configuration;
  edit: number;

  constructor() {
    this.configuration = ConfigService.config;
    this.data = data;
  }

  ngOnInit(): void {
    this.columns = [
      { key: 'phone', title: 'Phone', cellTemplate: this.phoneTpl },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];
  }

  eventEmitted($event) {
    if ($event.event === Event.onDoubleClick) {
      this.edit = $event.value.rowId;
    }
  }

  update($event) {
    this.data[this.edit].phone = $event.target.value;
    this.edit = -1;
  }
}
