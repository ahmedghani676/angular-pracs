import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Output() newItemEvents = new EventEmitter<object>();

 @Input() todos :any [];
  GridComponenet(){
   
    console.log(this.todos)
    
   
  }
  addNewItem(todos:{}) {
    debugger
    this.newItemEvents.emit(todos);
  }
  
  deleteTodo(todo:any) {

    this.todos = this.todos.filter(t => t.title !== todo.title);
  }
  UpdateTodo(todo: {}) {

    this.addNewItem(todo)
   
  }

  
  

 
}
