// Récupère les éléments du DOM
const form = document.getElementById('nameForm');
const outputJson = document.getElementById('outputJson');
const outputXml = document.getElementById('outputXml');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // on bloque le rechargement

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // —–– JSON
    const dataObject = { name: firstName, lastname: lastName };
    const jsonString = JSON.stringify(dataObject);
    outputJson.textContent = jsonString;

    // —–– XML
    const xmlString =
        `<person>\n` +
        `  <name>${firstName}</name>\n` +
        `  <lastname>${lastName}</lastname>\n` +
        `</person>`;
    outputXml.textContent = xmlString;
});
