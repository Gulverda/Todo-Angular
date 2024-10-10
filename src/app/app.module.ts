// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { AppComponent } from './app.component';
// import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    // TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    AppComponent // Import AppComponent here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
