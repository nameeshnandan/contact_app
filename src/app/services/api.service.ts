import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl ='http://localhost:3000/contacts'

  //dependency injection
  constructor(private http:HttpClient) { }

  //function for get all contacts
  getAllContacts():Observable<MyContact>{
    return this.http.get(this.baseUrl)
  }

  //api call to fetch a particular item
  viweContact(contactId:string){
                            //http://localhost:3000/contacts/c2
    return this.http.get(`${this.baseUrl}/${contactId}`)

    //api call for group names
  }
  getGroupName(groupId:any){
    return this.http.get('http://localhost:3000/groups/'+ groupId)
  }

    //api call for group details
  getAllGroups(){
    return this.http.get('http://localhost:3000/groups')
  }
    //api call for adding new contact to the sever
  addContact(contactBody:any){
    
      return this.http.post(this.baseUrl,contactBody)
  }
    //api call for delete contact
  deleteContact(contactId:any){
    return this.http.delete(`${this.baseUrl}/${contactId}`)
  }
  updateContact(contactId:any,contactBody:any){
    return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
  }
}
