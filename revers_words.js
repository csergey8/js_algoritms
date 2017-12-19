function reverseWords(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];

  wordsArr.forEach( word => {
    var reveresedWord = '';
    for (var i = word.length; i >=0 ; i--){
      reveresedWord += word[i];
    }
    reversedWordsArr.push(reveresedWord);
  });

  return reversedWordsArr.join(' ');
}
