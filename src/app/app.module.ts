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
import { UserService } from './shared/services/user.service';
import { FileUploadService } from './shared/services/fileUpload.service';
import { OrgProfileService } from './shared/services/orgProfile.service';
import { IndustryService } from './shared/services/industry.service';
import { InterestService } from './shared/services/interest.service';
import { OrgBranchService } from './shared/services/orgBranch.service';
import { PossibleSolutionService } from './shared/services/possibleSolution.service';
import { QuestionService } from './shared/services/question.service';
import { RatingRangeService } from './shared/services/ratingRange.service';
import { ResponseService } from './shared/services/response.service';
import { TemplateService } from './shared/services/template.service';
import { UserInterestService } from './shared/services/userInterest.service';
import { UserProfileService } from './shared/services/userProfile.service';
import { UserRatingService } from './shared/services/userRating.service';

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
  providers: [FileUploadService, IndustryService, InterestService, OrgBranchService, OrgProfileService,
                PossibleSolutionService, QuestionService, RatingRangeService, ResponseService, TemplateService,
                UserService, UserInterestService, UserProfileService, UserRatingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
