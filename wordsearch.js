const wordSearch = (letters, word) => {
  if (!word || !letters || letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }


  for (let i = 0; i < letters[i].length; i++) {
    let word1 = '';
    for (let j = 0; j < letters.length; j++) {
      word1 += letters[j][i];
    }
    if (word1.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;