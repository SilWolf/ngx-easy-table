import { Component, ViewChild } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { ConfigService } from './configuration.service';
import { Columns } from 'ngx-easy-table';
import { API, APIDefinition } from '../../../../projects/ngx-easy-table/src/lib';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  providers: [ConfigService],
})
export class TemplateComponent {
  @ViewChild('table', { static: true }) table: APIDefinition;
  public columns: Columns[] = [
    { key: 'name', title: 'Name', width: '15%', orderEnabled: true, searchEnabled: true },
    { key: 'age', title: 'Age', width: '15%', orderEnabled: true, searchEnabled: false },
    { key: 'company', title: 'Company', width: '15%', orderEnabled: true },
    { key: 'name', title: 'Name', width: '15%', orderEnabled: false },
    { key: 'phone', title: 'Phone', width: '15%', orderEnabled: false },
    { key: 'address.street', title: 'Address', width: '15%', orderEnabled: true },
    { key: '', title: 'Action', width: '5%', orderEnabled: false, searchEnabled: false },
  ];
  public data: Company[] = [];
  public configuration;

  constructor() {
    this.configuration = ConfigService.config;
    this.data = data;
  }

  onRowClickEvent($event, index: number): void {
    $event.preventDefault();
    this.table.apiEvent({
      type: API.toggleRowIndex,
      value: index,
    });
  }
}
