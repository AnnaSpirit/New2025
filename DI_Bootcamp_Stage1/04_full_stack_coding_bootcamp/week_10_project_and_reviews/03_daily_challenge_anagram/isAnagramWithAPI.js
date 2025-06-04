// isAnagramWithAPI.js
'use strict';

/**
 * normalizeForAPI(str):
 *  - Remove all whitespace (\s+)
 *  - Convert to lowercase
 */
function normalizeForAPI(str) {
    return str.replace(/\s+/g, '').toLowerCase();
}

/**
 * isAnagramLocal(word1, word2):
 *  - Local check by sorting letters (works in any language).
 */
function isAnagramLocal(word1, word2) {
    const w1 = normalizeForAPI(word1);
    const w2 = normalizeForAPI(word2);
    if (w1.length !== w2.length) return false;
    return w1.split('').sort().join('') === w2.split('').sort().join('');
}

/**
 * fetchAnagramsFromDatamuse(word):
 *  - Fetches anagrams for `word` from Datamuse API (English).
 *  - Returns an array of strings (all lowercased).
 *  - Returns [] on network/error.
 */
async function fetchAnagramsFromDatamuse(word) {
    const url = `https://api.datamuse.com/words?rel_anagram=${encodeURIComponent(word)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error('Datamuse returned error:', response.status);
            return [];
        }
        const data = await response.json();
        // Datamuse returns an array of objects: { word: "...", score: ..., numSyllables: ...}
        return data.map((entry) => entry.word.toLowerCase());
    } catch (err) {
        console.error('Datamuse network/JSON error:', err);
        return [];
    }
}

/**
 * fetchAnagramsFromAnagramica(word):
 *  - Fetches anagrams for `word` from Anagramica API (English).
 *  - Returns an array of strings (all lowercased).
 *  - Returns [] on network/error.
 */
async function fetchAnagramsFromAnagramica(word) {
    const url = `https://www.anagramica.com/all/${encodeURIComponent(word)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error('Anagramica returned error:', response.status);
            return [];
        }
        const data = await response.json();
        // Anagramica returns { all: [ ... ], best: [ ... ] }
        return data.all.map((entry) => entry.toLowerCase());
    } catch (err) {
        console.error('Anagramica network/JSON error:', err);
        return [];
    }
}

/**
 * checkInList(anagramList, target):
 *  - Returns true if `target` is found in `anagramList` array.
 */
function checkInList(anagramList, target) {
    return anagramList.includes(target);
}

/**
 * setupAPIChecker():
 *  - Hooks up the “Check with Datamuse & Anagramica” button.
 *  - Runs three checks:
 *      1. Local check (sort letters)
 *      2. Datamuse check (both directions)
 *      3. Anagramica check (both directions)
 *  - Displays three lines of English output.
 */
function setupAPIChecker() {
    const input1 = document.getElementById('api-word1');
    const input2 = document.getElementById('api-word2');
    const checkBtn = document.getElementById('api-check-btn');
    const resultDiv = document.getElementById('api-result');

    checkBtn.addEventListener('click', async () => {
        const raw1 = input1.value.trim();
        const raw2 = input2.value.trim();

        // 1) If either field is empty, show an error
        if (!raw1 || !raw2) {
            resultDiv.innerHTML = '⚠️ Please enter both words before checking.';
            resultDiv.style.color = 'red';
            return;
        }

        // 2) Local normalization (remove spaces, lowercase)
        const w1 = normalizeForAPI(raw1);
        const w2 = normalizeForAPI(raw2);

        // 3) Local check (sort letters)
        const isLocalAna = isAnagramLocal(raw1, raw2);

        // 4) If lengths differ, no need to call the APIs
        if (w1.length !== w2.length) {
            resultDiv.innerHTML = `
        <p style="color: orange;">
          Local check: "${raw1}" and "${raw2}" are NOT anagrams (different lengths).
        </p>
        <p style="color: orange;">
          Datamuse: no API call (different lengths).
        </p>
        <p style="color: orange;">
          Anagramica: no API call (different lengths).
        </p>
      `;
            return;
        }

        // 5) Otherwise, call Datamuse and Anagramica in parallel (both directions)
        resultDiv.innerHTML = '⏳ Checking (local + Datamuse + Anagramica)…';
        resultDiv.style.color = '#555';

        // Datamuse calls
        const promiseDatamuse1 = fetchAnagramsFromDatamuse(w1);
        const promiseDatamuse2 = fetchAnagramsFromDatamuse(w2);

        // Anagramica calls
        const promiseAnagramica1 = fetchAnagramsFromAnagramica(w1);
        const promiseAnagramica2 = fetchAnagramsFromAnagramica(w2);

        try {
            const [
                listDatamuse1,
                listDatamuse2,
                listAnagramica1,
                listAnagramica2,
            ] = await Promise.all([
                promiseDatamuse1,
                promiseDatamuse2,
                promiseAnagramica1,
                promiseAnagramica2,
            ]);

            // 6) Datamuse recognizes an anagram if either direction contains the other word
            const isAnaDatamuse =
                checkInList(listDatamuse1, w2) || checkInList(listDatamuse2, w1);

            // 7) Anagramica recognizes an anagram if either direction contains the other word
            const isAnaAnagramica =
                checkInList(listAnagramica1, w2) || checkInList(listAnagramica2, w1);

            // 8) Build three English sentences
            const sentenceLocal = isLocalAna
                ? `Local check: "${raw1}" and "${raw2}" ARE anagrams 🎉`
                : `Local check: "${raw1}" and "${raw2}" are NOT anagrams.`;

            const sentenceDatamuse = isAnaDatamuse
                ? `Datamuse: "${raw1}" and "${raw2}" ARE anagrams according to Datamuse 🎉`
                : `Datamuse: "${raw1}" and "${raw2}" are NOT anagrams according to Datamuse.`;

            const sentenceAnagramica = isAnaAnagramica
                ? `Anagramica: "${raw1}" and "${raw2}" ARE anagrams according to Anagramica 🎉`
                : `Anagramica: "${raw1}" and "${raw2}" are NOT anagrams according to Anagramica.`;

            // 9) Display all three lines in English
            resultDiv.innerHTML = `
        <p style="color: ${isLocalAna ? 'green' : 'orange'};">
          ${sentenceLocal}
        </p>
        <p style="color: ${isAnaDatamuse ? 'green' : 'orange'};">
          ${sentenceDatamuse}
        </p>
        <p style="color: ${isAnaAnagramica ? 'green' : 'orange'};">
          ${sentenceAnagramica}
        </p>
      `;
        } catch (err) {
            // 10) On network or JSON error, show a single red message
            console.error('Error during Datamuse/Anagramica calls:', err);
            resultDiv.innerHTML =
                '❌ An error occurred during the API checks. Please try again later.';
            resultDiv.style.color = 'red';
        }
    });
}

// When DOM is ready, set up the API checker
window.addEventListener('DOMContentLoaded', setupAPIChecker);
