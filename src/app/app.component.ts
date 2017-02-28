import { Component, OnInit } from '@angular/core';
import { IData } from './data.interface';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.html'
})
export class AppComponent {
  data: IData[];
  newLabel: string;
  newValue: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.$data.subscribe(data => {
      this.data = data;
    });
  }

  addData(): void {
    let newData = {
      label: this.newLabel,
      value: this.newValue
    } as IData;

    this.dataService.addData(newData);
  }
}
