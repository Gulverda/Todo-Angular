// src/app/todo/todo.model.ts
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    category?: string; // Optional category property
  }
  