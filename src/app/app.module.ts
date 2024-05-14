import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ReposComponent } from './components/repos/repos.component';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    
    declarations: [
        AppComponent,
        HeaderComponent,
        UserCardComponent,
        FooterComponent,
        HomeComponent,
        ReposComponent,
        PagenotfoundComponent
        
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule,
        AngularFireModule.initializeApp(environment.firebase),
        FormsModule,
        RouterModule,
        ToastrModule.forRoot({
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
        NgbModule,       
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }