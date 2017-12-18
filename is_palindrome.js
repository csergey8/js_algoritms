function isPalindrom(string) {
  string = string.toLoweCase();
  var characters = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

isPalindrome("Maddam I'm Adam")
