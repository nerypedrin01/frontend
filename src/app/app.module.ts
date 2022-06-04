import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templade/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { FooterComponent } from './components/templade/footer/footer.component';
import { NavComponent } from './components/templade/nav/nav.component';
import {MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from'@angular/material/list';
import {MatCardModule} from'@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule}from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UpdateComponent } from './components/product/update/update.component';
import { DeleteComponent } from './components/product/delete/delete.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    UpdateComponent,
    DeleteComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
