import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, DoCheck {
  ngDoCheck(): void {
    this.getLocalStorage(); //Chamando o localStorage que tem a lista de tarefa salva
  }
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('listaDeTarefas') || //vai buscar um local storage com o nome listaDeTarefas
      '[]'
  ); // Ou caso não tenha o  local storage com o nome listaDeTarefas, vai carregar com o array vazio
  ngOnInit(): void {}

  /* Metodo para deletar uma tarefa, que recebe um number, que é o index do array taskList */
  deletarTarefa(event: number): void {
    var confirmacao = window.confirm(
      'Deseja deletar a tarefa: ' + this.taskList[event].task + ' ?'
    );
    if (confirmacao) {
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

  public validacaoInput(event: String, index: number) {
    const tarefa = this.taskList[index].task;
    if (!event.length) {
      var confirmacao = window.confirm(
        'Tarefa está vazia, deseja deletar a tarefa?'
      );
      if (confirmacao) {
        this.deletarTarefa(index);
      }
    }
  }

  public getLocalStorage() {
    if (this.taskList) {
      // Se o array de tarefas não for vazia
      // Metodo para ordenação
      this.taskList.sort(
        (primeiro, ultimo) => Number(primeiro.checked) - Number(ultimo.checked)
      ); // Convertendo em numero do primeiro e ultimo checked e fazer o calculo de ordenação, onde todos "checados" vão pra baixo e não checados para cima
      localStorage.setItem('listaDeTarefas', JSON.stringify(this.taskList)); // Criando um local storage com a key chamada listaDeTarefas e convertendo o array de tarefas em JSON, pois o  localStorage.setItem só aceita String
    }
  }
}
