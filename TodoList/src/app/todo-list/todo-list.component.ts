import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { todos } from 'Modal/todo';
import { EmphttpService } from 'Service/todohppt.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todolist:any=[];
  status:String | undefined;

  constructor(private empservice:EmphttpService,private router:Router) { }

  ngOnInit(): void {
    this.empservice.getAllTodos().subscribe(data => this.todolist = data)
  }

  delete(todo:todos){
    // let objindx = this.todolist.findIndex((list: { id: number; })=>list.id === todo.id);
    // console.log(objindx)
    // this.todolist.splice(objindx,1)
    this.empservice.deleteTodo(todo.id).subscribe(book=>{
      this.empservice.getAllTodos();
      window.location.reload();
    })
}

}
