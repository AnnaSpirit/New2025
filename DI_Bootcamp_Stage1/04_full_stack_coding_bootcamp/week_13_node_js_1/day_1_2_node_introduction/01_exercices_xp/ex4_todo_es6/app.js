// Import the TodoList class from todo.js 👇
// Importer la classe TodoList depuis le module

import { TodoList } from "./todo.js";

// Create an instance of TodoList 👇
// Créer une instance de la liste de tâches

const myList = new TodoList();

// Add some tasks 👇
// Ajouter quelques tâches

myList.addTask("Learn ES6 modules");
myList.addTask("Implement TodoList class");
myList.addTask("Cook for Shabbat");


// Mark some as complete 👇
// Marquer certaines tâches comme complétées

myList.completeTask(1); // Mark the second task as complete
myList.completeTask(myList.tasks.length - 1); // Mark the last task as complete
myList.listTasks();

// Display all tasks 👇
// Afficher toutes les tâches avec leur statut

// myList.listTasks();