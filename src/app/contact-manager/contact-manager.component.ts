import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
[x: string]: any;
  //to hold all contact details
    allContacts:MyContact[]=[]

  //to hold data from user
    searchKey:string=''

  // heading:string='Contact Manager Page'  //string interpolation
    url="https://thumbs.dreamstime.com/b/user-icon-design-vector-illustration-eps-graphic-51749185.jpg"

  //dependancy injection
      constructor(private api:ApiService){}
      
      ngOnInit(): void {  //life cycle hook
        this.getAllContact()
        }
      getAllContact(){
        this.api.getAllContacts().subscribe((result:any)=>{
          console.log(result);
          this.allContacts=result
      })
      }
      // nameChange(){
      //   alert("name change")
      // }
      search(event:any){
        console.log(event.target.value);
        this.searchKey=event.target.value
      }

      deleteContact(contactId:any){
        this.api.deleteContact(contactId).subscribe((result:any)=>{
          alert('Contact Deleted');
          this.getAllContact()
        })
      }
}
