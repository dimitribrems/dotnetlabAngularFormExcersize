import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { DoneComponentComponent } from './done-component/done-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
      {path: "todo", component: TodoComponentComponent},
      {path: "done", component: DoneComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
