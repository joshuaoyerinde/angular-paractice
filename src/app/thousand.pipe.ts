import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousand'
})
export class ThousandPipe implements PipeTransform {
val;
  transform(size:number,extention:string='MB'):string {
    return(size/(1024*1024)).toFixed(2)+extention;
  //   this.val=Number(value)
  //   if(this.val >=1000000){
  //     return this.val/1000000 +"m";
  //   }else if(this.val >=1000){
  //     return this.val/1000 + "k";
  //   }
  //   else{
  //     return this.val;
  //   }
  }

}
