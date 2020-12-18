import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checker'
})

export class CheckerPipe implements PipeTransform {
  transform(value: any, gender:string ): any {
// gender=gender.toLowerCase();
    if(gender=="male" || gender=="female") {
      return value +" is a "+gender ;
    }else{
      return value + " is neither male or female";
    }
  }

}
