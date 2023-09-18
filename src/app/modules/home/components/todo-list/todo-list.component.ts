import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    //{ task: 'Minha primeira tarefa', checked: true },
    // { task: 'Minha segunda tarefa', checked: false },
  ];
  ngOnInit(): void {}

  /* Metodo para deletar uma tarefa, que recebe um number, que é o index do array taskList */
  deletarTarefa(event: number): void {
    var confirmacao = window.confirm(
      'Deseja deletar a tarefa: ' + this.taskList[event].task + ' ?'
    );
    if (confirmacao) {
      console.log(confirmacao);
      this.taskList.splice(event, 1);
    }
  }

  deletarTodasTarefas() {
    if (this.taskList.length > 1) {
      alert('Existem ' + this.taskList.length + ' tarefas cadastradas!');
    } else {
      alert('Existe ' + this.taskList.length + ' tarefa cadastrada!');
    }

    var confirmacao = window.confirm('Deseja deletar todas as tarefas?');
    if (confirmacao) {
      this.taskList = [];
    }
  }

  public setEmitTarefaTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }
}
