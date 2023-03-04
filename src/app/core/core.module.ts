import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';
import { MaterialModule } from '../material/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
// import {
//   BoardCreationDialogComponent,
//   BoardCreationFormComponent,
// } from './components';
import { InterceptorService } from './services/interceptor.service';
import { InvalidTokenInterceptor } from './interceptors/invalid-token.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    WelcomeComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InvalidTokenInterceptor,
      multi: true,
    },
  ],
  exports: [HeaderComponent, PopupComponent, MaterialModule],
})
export class CoreModule {}