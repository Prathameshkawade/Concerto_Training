import { Component, Input, OnInit } from '@angular/core';
import { todos } from 'Modal/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {



  @Input()
  todos:todos;

  constructor() {
    this.todos = {todo:'',id:0};
  }

  ngOnInit(): void {
  }

}
