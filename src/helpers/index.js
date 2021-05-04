export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetter = secretWord.split('');
  const guessedLetterSet = new Set(guessedWord);
  return secretLetter.filter(letter => guessedLetterSet.has(letter)).length;
};