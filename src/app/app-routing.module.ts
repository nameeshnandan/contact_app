import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';

const routes: Routes = [
  // http://localhost:4200 ->'' path for redirecion -- http"//localhost:4200/cpntact/admin
  {
    path:'',redirectTo:'contact/admin',pathMatch:'full'
  },
  {
    //path for contact manager
    path:'contact/admin',component:ContactManagerComponent
  },
  {
    //path for add contact
    path:'contact/add',component:AddContactComponent
  },
  {
    //path for update contact
    path:'contact/update/:Id',component:UpdateContactComponent
  },
  {
    //path for view contact
    path:'contact/view/:contactId',component:ViewContactComponent
  },
  {
    //path for page not fount
    path:'**',component:PageNotFountComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
