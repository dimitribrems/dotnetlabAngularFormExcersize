import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListService } from '../list-service';
import { ToDoModel } from '../Models/to-do-model';
@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {
  public formGroup!: FormGroup;
  public ToDoList!: ToDoModel[];
  

  constructor(private fb:FormBuilder, private listService :ListService) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      task:""
    })

    this.listService.getToDoList().subscribe((result)=>{
      this.ToDoList = result;
    })
  }

  public saveForm(): void{
    console.log(this.formGroup.getRawValue());
    let todoModelTemp = Object.assign(new ToDoModel(), this.formGroup.getRawValue());
    this.listService.AddToItemToList(todoModelTemp);
  }

  public MakeItemDone(id: number){
    this.listService.AddItemToDoneList(id);
  }
  

}
