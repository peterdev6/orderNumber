import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrdersService } from './orders.service';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationService } from './pagination.service';

const appRoutes = [
  {path: 'search', component: AppComponent},
  {path: 'orders/:id', component: OrdersComponent, outlet: 'table'},
  {path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, onSameUrlNavigation: 'reload' } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserModule
  ],
  providers: [OrdersService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
