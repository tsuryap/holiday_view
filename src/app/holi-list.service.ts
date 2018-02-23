import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Holiday } from './holiday';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HoliListService {
	 holidayListUrl = 'https://holidayapi.com/v1/holidays?country=US&year=2017&key=058f4506-caf0-4bdd-b52b-cbc98e20e02e';
     holidayList: Holiday[] = [];
	 constructor(private http:HttpClient) {}
     getHolidayList(){
     
         return this.http.get(this.holidayListUrl)
                        // ...now we return data
                         .map(res => res )
                         // ...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
     setHolidayList(holidayList:Holiday[]){
         this.holidayList = holidayList;
     }


}
