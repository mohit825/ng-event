import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtertext'
})
export class FiltertextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   if(!args){
      return value;
   }
   else{
     args = args.toUpperCase();
   }

   return value.filter((items)=>{
    return items.name.startsWith(args)  == true
    } )
  }
  
   
}
