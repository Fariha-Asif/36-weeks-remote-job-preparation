/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [] // it stores all todos
  }

  //add todo in the list
  add(todo) {
    this.todos.push(todo);
  }

  // remove todo by it's index
  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }

  // it replaces the old todo with the new one
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  // return all the todos
  getAll() {
    return this.todos;
  }

  // return single todo by it's index
  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    }
    return null; // return null if index is out of range or invalid
  }
  // clear all the todos
  clear() {
    this.todos = [];
  }

}

module.exports = Todo;
