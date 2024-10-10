// src/app/todo/todo.component.ts
import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodoTitle: string = '';
  newTodoCategory: string = ''; // Add a new property for category
  categories: string[] = ['Groceries', 'College', 'Payments', 'Uncategorized']; // Define categories

  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        title: this.newTodoTitle.trim(),
        completed: false,
        category: this.newTodoCategory || 'Uncategorized', // Assign the category
      };
      this.todos.push(newTodo);
      this.newTodoTitle = ''; // Clear input field
      this.newTodoCategory = ''; // Clear category field
    }
  }

  toggleTodoCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }
}
