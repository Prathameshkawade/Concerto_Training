import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { todos } from 'Modal/todo';
import { EmphttpService } from 'Service/todohppt.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private empservice:EmphttpService,private router:Router) { }

  ngOnInit(): void {
  }

  savetodo(todo:todos){
    console.log(`todo === ${todo.todo}`)
    this.empservice.addTodo(todo).subscribe(data=>
      {
      console.log(data);
      window.location.reload();
      });
      this.router.navigate(['/list']);

  }

}
