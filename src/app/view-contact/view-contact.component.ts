import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{
  //to hold contactId
    contactId:string='';

    // to  hold particular contact details
      contact:any=[];

  //to hold particular groupId
    groupId:string='';

  //to hold particular group name
    groupName:string='';


    constructor(private activatedroute:ActivatedRoute,private api:ApiService){}

    ngOnInit(): void {
      //get particular contact id
      this.activatedroute.params.subscribe((data:any)=>{
        console.log(data);  //{contactId: 'c2'}
        this.contactId=data.contactId;
        console.log(this.contactId);  //c2

      //get particular contact details
      this.api.viweContact(this.contactId).subscribe((data:any)=>{
        console.log(data);
        this.contact=data  //contact details
        this.groupId=data.groupId
        console.log(this.groupId);
        
        //get particular group name
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          console.log(data);
          this.groupName=data.name;
          console.log(this.groupName);
      })

        
        
      })
      })
    }
}
