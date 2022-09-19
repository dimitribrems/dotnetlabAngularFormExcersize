import { OnInit } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { ToDoModel } from "./Models/to-do-model"

export class ListService{
    
    public ToDoList!: ToDoModel[];
    public DoneList!: ToDoModel[];


    constructor(){
        this.ToDoList = [];
        this.DoneList = [];
    }

    public AddItemToDoneList(id: number){
        let toDoItem = this.getToDoItem(id);
        toDoItem.done = true;
        this.DoneList.push(toDoItem);
        console.log(this.DoneList)
    }

    public getToDoItem(id: number){
        return this.ToDoList[id];
    }

    public getToDoList(){
    return of(this.ToDoList);
    }

    public AddToItemToList(toDoItem: ToDoModel){
        toDoItem.id = this.ToDoList.length 
        this.ToDoList.push(toDoItem);
    }

    
    public GetDoneList() {
        return of(this.DoneList);
    }

    

}


