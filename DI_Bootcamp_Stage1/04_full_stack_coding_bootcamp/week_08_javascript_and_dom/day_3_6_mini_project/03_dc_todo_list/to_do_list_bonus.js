//* AJOUTcompteur de tâches*/

// Activation du compteur de tâches (true = affichage, false = désactivé)
const showCount = true;

// Tableau de tâches vide comme objets
const tasks = [];
let nextTaskId = 0;

// Sélection des éléments du DOM
const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');
const listTasks = document.querySelector('.listTasks');
const clearBtn = document.querySelector('.clear');

// Élément pour afficher le compteur 
const countEl = document.getElementById('taskCount');

/**
 * Met à jour l'affichage du nombre de tâches
 */
function updateTaskCount() {
    if (!showCount || !countEl) return;
    countEl.textContent = `Tasks: ${tasks.length}`;
}

// Initialisation du compteur
updateTaskCount();

// Écoute du submit pour ajouter la tâche
form.addEventListener('submit', e => {
    e.preventDefault();
    addTask();
});

/**
 * Ajoute une tâche sous forme d'objet et l'affiche
 */
function addTask() {
    const text = input.value.trim();
    if (text === '') return;

    // Création de l'objet tâche
    const task = {
        task_id: nextTaskId++,
        text: text,
        done: false
    };
    tasks.push(task);

    // Création de l'élément tâche
    const item = document.createElement('div');
    item.classList.add('task-item');
    item.setAttribute('data-task-id', task.task_id);
    item.innerHTML = `
    <button type="button" class="delete-btn">
      <i class="fa fa-times"></i>
    </button>
    <label>
      <input type="checkbox" />
      <span>${task.text}</span>
    </label>
  `;

    listTasks.appendChild(item);
    input.value = '';

    updateTaskCount();
}

/**
 * Supprime une tâche du tableau et du DOM
 */
function deleteTask(taskId) {
    // Retirer de l'array
    const idx = tasks.findIndex(t => t.task_id === taskId);
    if (idx > -1) tasks.splice(idx, 1);
    // Retirer du DOM
    const item = listTasks.querySelector(`[data-task-id="${taskId}"]`);
    if (item) {
        item.remove();
        updateTaskCount();
    }
}

/**
 * Modifie l'état "done" de la tâche et met à jour le DOM
 */
function doneTask(taskId, isDone) {
    // Mise à jour de l'objet
    const task = tasks.find(t => t.task_id === taskId);
    if (!task) return;
    task.done = isDone;

    // Mise à jour du DOM
    const item = listTasks.querySelector(`[data-task-id="${taskId}"]`);
    const span = item.querySelector('span');
    if (isDone) {
        span.style.textDecoration = 'line-through';
        span.style.color = 'red';
        // Appliquer le background sur toute la boîte
        item.style.backgroundColor = 'lightgreen';
    } else {
        span.style.textDecoration = 'none';
        span.style.color = 'black';
        span.style.backgroundColor = '';  // supprimer fond du span si présent
        item.style.backgroundColor = '';  // supprimer fond de l'item
    }
}

// Délégué pour les interactions dans la liste
listTasks.addEventListener('click', e => {
    // Suppression via deleteTask()
    const delBtn = e.target.closest('.delete-btn');
    if (delBtn) {
        const item = delBtn.closest('.task-item');
        const id = parseInt(item.dataset.taskId, 10);
        deleteTask(id);
        return;
    }
});

listTasks.addEventListener('change', e => {
    // Coche/Décoche
    if (e.target.matches('input[type="checkbox"]')) {
        const item = e.target.closest('.task-item');
        const id = parseInt(item.dataset.taskId, 10);
        doneTask(id, e.target.checked);
    }
});

// Bouton Clear pour tout supprimer
clearBtn.addEventListener('click', e => {
    e.preventDefault();
    tasks.length = 0;
    listTasks.innerHTML = '';
    updateTaskCount();
});
