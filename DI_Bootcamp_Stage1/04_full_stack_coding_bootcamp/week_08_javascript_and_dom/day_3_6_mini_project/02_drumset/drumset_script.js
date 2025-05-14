// 🎹 Liste des touches autorisées (codes ASCII des lettres A à L)
const allowedKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76];

// 👂 Quand on appuie sur une touche du clavier
window.addEventListener('keydown', function (event) {
	const keyCode = event.keyCode;

	// ❌ Ignore les touches non listées
	if (!allowedKeys.includes(keyCode)) return;

	// 🛑 Empêche les actions par défaut et arrête la propagation de l'événement
	event.preventDefault();
	event.stopPropagation();

	// ▶️ Joue le son associé à la touche
	playAudio(keyCode);
});

// 🖱️ Quand on clique sur un élément "drum"
const drums = document.getElementsByClassName("drum");

for (let i = 0; i < drums.length; i++) {
	drums[i].addEventListener('click', function () {
		const keyCode = this.getAttribute("data-key");
		playAudio(keyCode);
	});
}

/**
 * 🥁 Fonction qui joue le son en fonction du code de touche
 * @param {number|string} keyCode - Le code de la touche ou l’attribut data-key cliqué
 */
function playAudio(keyCode) {
	// const audio = document.querySelector(`audio[data-key='${keyCode}']`); // 1 seul touche
	const originalAudio = document.querySelector(`audio[data-key='${keyCode}']`);
	if (!originalAudio) return;

	const audio = originalAudio.cloneNode(); // 🔥 Copie le son pour qu’il soit indépendant
	audio.currentTime = 0;
	audio.play();

	const drum = document.querySelector(`.drum[data-key='${keyCode}']`);

	if (!audio || !drum) return; // 🔍 Sécurité : on vérifie que l’élément existe

	// ⏪ Remet le son au début si on appuie plusieurs fois rapidement
	audio.currentTime = 0;

	// 💥 Ajoute une classe temporaire pour l’effet visuel
	drum.classList.add("playing");

	// 🧼 Supprime la classe après 100ms pour revenir à l’état normal
	setTimeout(() => {
		drum.classList.remove("playing");
	}, 100);

	// 🔊 Joue le son
	audio.play();
}
