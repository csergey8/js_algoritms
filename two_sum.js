function twoSum(numArray, sum) {
  var pairs = [];
  var hashtable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var countpart = sum - currNum;
    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashtable.push(currNum);
  }

  return pairs;
}
