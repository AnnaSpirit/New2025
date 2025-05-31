import re
import string
from collections import Counter
from pathlib import Path

class Text:
    """
    Basic analytical utilities for a block of text.
    """

    def __init__(self, text: str) -> None:
        # Stocke le texte brut fourni par l'utilisateur
        self.text: str = text

    # ---------- Analysis methods ----------

    def _tokenise(self) -> list[str]:
        # Découpe le texte sur les espaces et normalise en minuscules
        return self.text.lower().split()

    def word_frequency(self, word: str) -> int | None:
        """
        Return the number of times *word* occurs in the text
        (case-insensitive).  None if absent.
        """
        # Compte les occurrences du mot cherché
        count = self._tokenise().count(word.lower())
        return count or None

    def most_common_word(self) -> str | None:
        """
        Return the single most frequent word in the text.
        """
        tokens = self._tokenise()
        if not tokens:
            return None
        # Utilise Counter pour obtenir la fréquence maximale
        frequencies = Counter(tokens)
        return frequencies.most_common(1)[0][0]

    def unique_words(self) -> list[str]:
        """
        Return a sorted list of unique words appearing in the text.
        """
        return sorted(set(self._tokenise()))

    # ---------- Alternate constructor ----------

    @classmethod
    def from_file(cls, file_path: str | Path) -> "Text":
        """
        Build a Text object from the contents of a file.
        """
        path = Path(file_path)
        if not path.is_file():
            raise FileNotFoundError(f"File not found: {file_path}")
        # Lit le fichier entier puis crée une instance
        return cls(path.read_text(encoding="utf-8"))


class TextModification(Text):
    """
    Adds cleaning utilities to Text.
    """

    # Liste minimale — ajoutez vos propres mots si nécessaire
    _STOP_WORDS: set[str] = {
        "a", "an", "the", "is", "are", "in", "at", "of", "on", "for", "and", "to"
    }

    def remove_punctuation(self) -> str:
        """
        Delete all punctuation characters and update self.text.
        """
        trans_table = str.maketrans("", "", string.punctuation)
        # Supprime la ponctuation puis met à jour l'attribut
        self.text = self.text.translate(trans_table)
        return self.text

    def remove_stop_words(self) -> str:
        """
        Remove common English stop-words and update self.text.
        """
        tokens = [
            word for word in self._tokenise() if word not in self._STOP_WORDS
        ]
        # Reconstruit la phrase sans stop-words
        self.text = " ".join(tokens)
        return self.text

    def remove_special_characters(self) -> str:
        """
        Strip any non-alphanumeric symbol (excluding spaces and line-breaks).
        """
        # Substitue tous les caractères spéciaux par une chaîne vide
        self.text = re.sub(r"[^\w\s]", "", self.text)
        return self.text


if __name__ == "__main__":
    # -------- Quick demo --------
    sample = (
        "The quick brown fox jumps over the lazy dog. "
        "The dog, amazed, jumps too!"
    )

    analyser = TextModification(sample)

    print("Original:", analyser.text)
    print("Unique  :", analyser.unique_words())
    print("Freq 'dog':", analyser.word_frequency("dog"))
    print("Most common:", analyser.most_common_word())

    # Cleaning in action
    analyser.remove_punctuation()
    analyser.remove_stop_words()
    analyser.remove_special_characters()
    print("Cleaned :", analyser.text)
