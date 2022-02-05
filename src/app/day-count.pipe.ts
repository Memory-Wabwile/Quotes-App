import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayCount',
})
export class DayCountPipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date();
    let todaysTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs( todaysTime -value ) 
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value > todaysTime){
      return dateCounter;
    }else{
    return 0;
  }
}
}