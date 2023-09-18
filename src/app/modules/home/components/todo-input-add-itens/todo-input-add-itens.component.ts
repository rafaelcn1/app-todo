import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css'],
})
export class TodoInputAddItensComponent {
  @Output() public emitTarefaTaskList = new EventEmitter();

  public addTarefa: string = '';

  public cadastratarTarefa() {
    this.addTarefa = this.addTarefa.trim(); // Para remover espaços no inicio, no final e não deixar cadastrar tarefa vazia ou em branco
    if (this.addTarefa) {
      this.emitTarefaTaskList.emit(this.addTarefa);
      this.addTarefa = '';
    } else {
      alert("Favor inserir uma tarefa!")
    }
  }
}
