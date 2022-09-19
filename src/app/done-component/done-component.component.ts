import { Component, OnInit } from '@angular/core';
import { ListService } from '../list-service';
import { ToDoModel } from '../Models/to-do-model';

@Component({
  selector: 'app-done-component',
  templateUrl: './done-component.component.html',
  styleUrls: ['./done-component.component.css']
})
export class DoneComponentComponent implements OnInit {
  public DoneList!: ToDoModel[];
  constructor(private listService: ListService) { }
  
  ngOnInit(): void {
    this.listService.GetDoneList().subscribe((lijst: ToDoModel[])=>{
      this.DoneList = lijst;
    })


   
  }

}
