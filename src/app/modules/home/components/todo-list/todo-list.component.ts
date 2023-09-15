import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    { task: 'Minha primeira tarefa', checked: true },
    { task: 'Minha segunda tarefa', checked: false },
  ];
  ngOnInit(): void {}
}
