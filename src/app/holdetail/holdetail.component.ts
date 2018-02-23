import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HoliListService } from '../holi-list.service';
import { Holiday } from '../holiday';

@Component({
  selector: 'app-holdetail',
  templateUrl: './holdetail.component.html',
  styleUrls: ['./holdetail.component.css']
})
export class HoldetailComponent implements OnInit {
  holidayDetail: Holiday = {
  	name: "",
  	date: ""
  };
  constructor(
    private route: ActivatedRoute,
    private holListService: HoliListService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHoliday();
  }

  getHoliday(): void {
     const id =  this.route.snapshot.paramMap.get('id');
               this.holListService.getHolidayList()
                   .subscribe(
                         holidayList => {
                            for (let key in holidayList.holidays) {
						       let value = holidayList.holidays[key];
						       if(value[0]['name'] === id){
						       	   this.holidayDetail =  value[0];
						       }               
                          }
                         }, 
                        err => {
                            console.log(err);
                         }
                       );
  }

  goBack(): void {
    this.location.back();
  }


}
