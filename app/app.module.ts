import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {CustomMaterialModule} from "./core/material.module";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule  }   from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { MustMatchDirective } from './helpers/must-match.directive';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatMenuModule} from '@angular/material/menu';
import { IsafeLoginComponent } from './isafe-login/isafe-login.component';
import { SignupComponent } from './signup/signup.component';
import{HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import{MatSidenavModule} from '@angular/material';
import {MatExpansionModule, MatInputModule} from '@angular/material';
import { ChildComponent } from './child/child.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatVideoModule } from 'mat-video';





const appRoutes: Routes = [{ path: "login", component: LoginComponent },
  { path: '', component: HomeComponent,canActivate: [AuthGuard], data: { title: 'Home Component' } },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard], data: { title: 'Home Component' } },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard],data: { title: 'About Component' } },
  { path: 'services', component: ServicesComponent,canActivate: [AuthGuard], 
  children : [
            {path:'child', component:ChildComponent},
            {path:'register', component:RegisterComponent}
        ]
        },
  { path: 'signup', component: SignupComponent,canActivate: [AuthGuard], data: { title: 'SignupComponent' } },

  

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
     MustMatchDirective,
     ServicesComponent,
     LoginComponent,
     RegisterComponent,
     IsafeLoginComponent,
     SignupComponent,
     ChildComponent
    
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } 
    ),
     CustomMaterialModule,ReactiveFormsModule,FormsModule ,MatMenuModule, MatExpansionModule,MatSidenavModule,
       MatInputModule,HttpClientModule,NgbModule, DragDropModule,MatVideoModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
