import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes : Routes = [
  {path:'', component: HomeComponent},
  {path:'jokes', component: CategoryListComponent},
  {path:'people', component: PeopleListComponent},
  {path:'category/:id', component: CategoryDetailComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PeopleListComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
