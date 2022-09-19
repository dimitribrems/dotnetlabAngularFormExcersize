import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { DoneComponentComponent } from './done-component/done-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListService } from './list-service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    DoneComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
