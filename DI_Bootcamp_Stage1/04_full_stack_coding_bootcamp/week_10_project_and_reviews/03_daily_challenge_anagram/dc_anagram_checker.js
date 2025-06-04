// dc_anagram_checker.js
'use strict';

/**
 * normalizeString(str):
 *  - Remove all whitespace (\s)
 *  - Convert to lowercase
 */
function normalizeString(str) {
    return str.replace(/\s+/g, '').toLowerCase();
}

/**
 * isAnagramLocal(word1, word2):
 *  - Local check by sorting letters.
 *  - Works for any language (as long as you ignore spaces and case).
 */
function isAnagramLocal(word1, word2) {
    const w1 = normalizeString(word1);
    const w2 = normalizeString(word2);

    // Quick length check
    if (w1.length !== w2.length) {
        return false;
    }

    // Sort letters and compare
    return w1.split('').sort().join('') === w2.split('').sort().join('');
}

/**
 * setupManualChecker():
 *  - Hook up the button, read the two input fields,
 *  - Perform local anagram check,
 *  - Display the result in #manual-result.
 */
function setupManualChecker() {
    const input1 = document.getElementById('manual-word1');
    const input2 = document.getElementById('manual-word2');
    const checkBtn = document.getElementById('manual-check-btn');
    const resultDiv = document.getElementById('manual-result');

    checkBtn.addEventListener('click', () => {
        const val1 = input1.value.trim();
        const val2 = input2.value.trim();

        // If either field is empty, show an error
        if (!val1 || !val2) {
            resultDiv.textContent = '⚠️ Please enter both entries before checking.';
            resultDiv.style.color = 'red';
            return;
        }

        // Perform the local anagram check
        const isAna = isAnagramLocal(val1, val2);
        if (isAna) {
            resultDiv.textContent = `"${val1}" and "${val2}" ARE anagrams 🎉`;
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = `"${val1}" and "${val2}" are NOT anagrams.`;
            resultDiv.style.color = 'orange';
        }
    });
}

// Wait for the DOM to be fully loaded, then set up the listener
window.addEventListener('DOMContentLoaded', setupManualChecker);
