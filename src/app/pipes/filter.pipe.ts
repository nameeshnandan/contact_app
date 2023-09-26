import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  result:any[]=[];
  transform(allContacts:any[],searchKey:string,propName:string): any[] {

    if(!allContacts||searchKey==''||propName==''){
      return allContacts
    }
    allContacts.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().includes(searchKey.trim().toLocaleLowerCase())){
        this.result.push(contact) 
      }
    })
    return this.result;
  }

}
