//*WITHOUT REGEX*/
// validate.js

// ▶️ On récupère le formulaire par son bon ID
// document
//     .getElementById('emailForm')
//     .addEventListener('submit', function (event) {
//         event.preventDefault(); // empêche l'envoi automatique

//         const email = document.getElementById('email').value;

//         if (validateEmailNoRegex(email)) {
//             alert('🎉 Yeah, your email is valid!');
//         } else {
//             alert('⚠️ Your email is invalid. Reassemble! ');
//         }
//     });

// /**
//  * Validation manuelle d'un email sans regex.
//  * @param {string} email
//  * @returns {boolean}
//  */
// function validateEmailNoRegex(email) {
//     const trimmed = email.trim(); // supprime les espaces en début/fin
//     const atIndex = trimmed.indexOf('@');
//     const dotIndex = trimmed.lastIndexOf('.');

//     // ❌ Conditions d’échec
//     if (
//         atIndex < 1 ||                  // pas de caractère avant '@'
//         dotIndex <= atIndex + 1 ||      // pas de '.' après au moins 1 caractère
//         dotIndex === trimmed.length - 1 // '.' en dernière position
//     ) {
//         return false;
//     }
//     if (trimmed.includes(' ')) {      // pas d'espaces au milieu
//         return false;
//     }
//     return true;                      // tout est bon
// }


//*WITH REGEX*/
// ▶️ On intercepte l'envoi du formulaire
document
    .getElementById('emailForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();  // Empêche l'envoi réel

        const email = document.getElementById('email').value;

        if (validateEmailRegex(email)) {
            alert('🎉 Yeah, your email is valid!');  // Succès
        } else {
            alert('⚠️ Your email is invalid. Reassemble! ');
        }
    });

/**
 * Vérifie l'email grâce à une expression régulière.
 * @param {string} email
    * @returns {boolean}
    */
function validateEmailRegex(email) {
    // ^ début, $ fin
    // [^\s@]+ : un ou plusieurs caractères autres qu'espace et @
    // @[^\s@]+ : @ + un ou plusieurs caractères autres qu'espace et @
    // \. : un point
    // [A-Za-z]{2,} : au moins deux lettres (ex : .com, .io, .fr…)
    const re = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
    return re.test(email);
}
