// Define and export the TodoList class 👇
// Définir et exporter la classe TodoList

/*une classe simple :
Elle stocke les tâches dans this.tasks
Elle propose :
.addTask() pour ajouter
.completeTask() pour marquer comme faite
.listTasks() pour afficher*/

export class TodoList {
    constructor() {
        this.tasks = [];
    }

    //mot-cle: constructor: permet de créer une instance [c’est un objet concret créé à partir d’un modèle abstrait (la classe).]
    //La classe est le plan de fabrication (irreelle) et la maison construite est l'instance (concret). instance = occurence.

    addTask(task) {
        this.tasks.push({ description: task, completed: false });
        console.log(`✅ Task added: "${task}"`);
    }

    //Push: méthode qu’on utilise sur les tableaux pour ajouter un élément à la fin -- Inserer à la suite--


    completeTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].completed = true;
            console.log(`✔️ Task marked as complete: "${this.tasks[index].description}"`);
        } else {
            console.log(`❌ Task at index ${index} not found`);
        }
    }

    listTasks() {
        console.log("📋 Todo List:");
        this.tasks.forEach((task, index) => {
            const status = task.completed ? "✅" : "⏳";
            console.log(`${index}. ${task.description} ${status}`);
        });
    }
}
