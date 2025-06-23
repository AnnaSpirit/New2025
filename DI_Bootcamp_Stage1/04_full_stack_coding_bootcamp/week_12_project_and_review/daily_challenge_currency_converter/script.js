// Signature: AnnaSpirit
const apiKey = 'ba0303f63f26fa8b8592bd10';
const baseUrl = 'https://v6.exchangerate-api.com/v6';

const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');
const switchBtn = document.getElementById('switch');
const amountInput = document.getElementById('amount');

// 💱 Remplit les listes déroulantes avec les devises supportées
async function loadCurrencies() {
    try {
        const res = await fetch(`${baseUrl}/${apiKey}/codes`);
        const data = await res.json();
        const codes = data.supported_codes;

        codes.forEach(code => {
            const optionFrom = new Option(`${code[0]} - ${code[1]}`, code[0]);
            const optionTo = new Option(`${code[0]} - ${code[1]}`, code[0]);
            fromSelect.appendChild(optionFrom);
            toSelect.appendChild(optionTo);
        });

        // Valeurs par défaut
        fromSelect.value = 'EUR';
        toSelect.value = 'USD';
    } catch (error) {
        resultDiv.textContent = `🚫 Error loading currencies: ${error.message}`;
    }
}

// 🔁 Inverse les devises
switchBtn.addEventListener('click', () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
});

// 🎯 Convertit la devise
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const from = fromSelect.value;
    const to = toSelect.value;
    const amount = amountInput.value;

    if (!amount || isNaN(amount)) {
        resultDiv.textContent = '🤨 Please enter a valid amount.';
        return;
    }

    try {
        const res = await fetch(`${baseUrl}/${apiKey}/pair/${from}/${to}/${amount}`);
        const data = await res.json();

        if (data.result === 'success') {
            resultDiv.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
        } else {
            resultDiv.textContent = `🚫 Conversion failed: ${data['error-type']}`;
        }
    } catch (error) {
        resultDiv.textContent = `⚠️ Network error: ${error.message}`;
    }
});

// 🚀 Démarrage
loadCurrencies();
