import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { CustomersComponent } from './components/home/customers/customers.component';
import { FeedbackFormsComponent } from './components/home/feedback-forms/feedback-forms.component';
import { DesignFeedbackFormComponent } from './components/home/design-feedback-form/design-feedback-form.component';
import { ActionPlansComponent } from './components/home/action-plans/action-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    CustomersComponent,
    FeedbackFormsComponent,
    DesignFeedbackFormComponent,
    ActionPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
