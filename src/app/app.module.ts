import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { OrdersComponent } from './orders/orders.component';
import { BackofficeRoutesModule } from './routes/routes/routes.module';
import { LoginComponent } from './user-handler/login/login.component';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseComponent,
    OrdersComponent,
    LoginComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    BackofficeRoutesModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
