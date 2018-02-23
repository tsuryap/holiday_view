import { Component, OnInit } from '@angular/core';
import { HoliListService } from '../holi-list.service';
import { Holiday } from '../holiday';
@Component({
  selector: 'app-hollist',
  templateUrl: './hollist.component.html',
  styleUrls: ['./hollist.component.css'],
  providers: [HoliListService]
})
export class HollistComponent implements OnInit {
  heroes = [{i:1,name:'test'},{i:2,name:'surya'}];
  holidayList : Holiday[] = [];
  constructor(private holListService: HoliListService) { }

  ngOnInit() {
  	this.loadHolidaysList();
  }
  loadHolidaysList(){
 	          this.holListService.getHolidayList()
                           .subscribe(
                                 holidayList => {
                                  for (let key in holidayList.holidays) {
    										                let value = holidayList.holidays[key];
    										                this.holidayList.push(value[0]);
                                  }
                                  this.holListService.holidayList = this.holidayList;
                                 }, 
                                err => {
                                    console.log(err);
                                 }
                               );
  }

}


