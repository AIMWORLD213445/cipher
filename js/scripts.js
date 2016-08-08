jQuery(document).ready(function() {
  var capitalizeFirstLast = function(str1){
    var length = str1.length;
    str1 = str1.toUpperCase();
    var firstLetter = str1.charAt(0);
    var lastLetter = str1.charAt(length-1);
    return firstLetter+lastLetter;
  }
  var getHalfLengthChar = function(str1){
    var length = str1.length;
    length = length - (length % 2);
    var halfLength=(length)/2;
    return str1.charAt(length);
  }
  function reverse(str1) {
    var revStr = '';
    for (var i = str1.length - 1; i >= 0; i--)
      revStr += str1.charAt(i);
    return revStr;
  }
  var sentence = prompt("enter a sentence");
  var sentence1 = capitalizeFirstLast(sentence);
  var sentence2 = reverse(sentence1);
  var sentence3 = sentence+sentence2;
  var sentence4 = getHalfLengthChar(sentence)+sentence3
  var sentence5 = reverse(sentence4);

  jQuery("#original").click(function() {
    alert(sentence);
  });
  jQuery("#encoded").click(function() {
    alert(sentence5);
  });
});
