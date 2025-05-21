// Tableau de tâches vide
const tasks = [];

// Sélection des éléments du DOM
const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');
const listTasks = document.querySelector('.listTasks');
const clearBtn = document.querySelector('.clear');

// Écoute du submit pour ajouter la tâche
form.addEventListener('submit', e => {
    e.preventDefault();
    addTask();
});

/**
 * Ajoute une tâche au tableau et au DOM
 */
function addTask() {
    const taskText = input.value.trim();
    if (taskText === '') return;

    // Ajout au tableau
    tasks.push(taskText);

    // Création de l'élément tâche
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
    <button type="button" class="delete-btn">
      <i class="fa fa-times"></i>
    </button>
    <label>
      <input type="checkbox" />
      <span>${taskText}</span>
    </label>
  `;

    // Ajout au DOM
    listTasks.appendChild(taskItem);

    // Réinitialisation de l'input
    input.value = '';
}

// Gestion des clics dans la liste (délégué) pour suppression
listTasks.addEventListener('click', e => {
    const delBtn = e.target.closest('.delete-btn');
    if (!delBtn) return;

    const item = delBtn.closest('.task-item');
    const text = item.querySelector('span').textContent;

    // Retrait dans le tableau
    const idx = tasks.indexOf(text);
    if (idx > -1) tasks.splice(idx, 1);

    // Retrait du DOM
    item.remove();
});

// Gestion du changement d'état checkbox pour barrer
listTasks.addEventListener('change', e => {
    if (!e.target.matches('input[type="checkbox"]')) return;
    const span = e.target.nextElementSibling;
    const item = e.target.closest('.task-item');
    if (e.target.checked) {
        span.style.textDecoration = 'line-through';
        span.style.color = 'green';  // Couleur du texte terminé
        item.style.backgroundColor = '#e0ffe0'; // Vert clair pour la boîte
    } else {
        span.style.textDecoration = 'none';
        span.style.color = '';      // Couleur initiale
        item.style.backgroundColor = ''; // Retour à l'initial
    }
});

// Bouton Clear pour tout supprimer
clearBtn.addEventListener('click', e => {
    e.preventDefault();
    tasks.length = 0;
    listTasks.innerHTML = '';
});
