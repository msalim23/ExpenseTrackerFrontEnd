import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UsersSignupComponent } from './users-signup/users-signup.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';

const appRoutes: Routes = [
  { path: 'signup', component: UsersSignupComponent },
  { path: 'list', component: UsersListComponent },
  { path: 'home', component: AppComponent},
  { path: 'detail/:id', component: UsersDetailsComponent},
  { path: 'addExpense/:id', component: AddExpenseComponent}

  ];

@NgModule({
  declarations: [
    AppComponent,
    UsersSignupComponent,
    UsersListComponent,
    UsersDetailsComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
