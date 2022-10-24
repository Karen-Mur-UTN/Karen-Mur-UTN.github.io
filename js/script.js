function transcrire() {
  var area = document.getElementById("textoUsuario");

  var getCount = function (str, search) {
    return str.split(search).length - 1;
  };

  var replaceText = function (search, replaceWith) {
    if (area.value.indexOf(search) >= 0) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      var textBefore = area.value.substr(0, end);
      var lengthDiff =
        (replaceWith.length - search.length) * getCount(textBefore, search);
      area.value = area.value.replace(search, replaceWith);
      area.selectionStart = start + lengthDiff;
      area.selectionEnd = end + lengthDiff;
    }
  };

  area.addEventListener("keypress", function (e) {
    setTimeout(function () {
      replaceText("==", "+");
      replaceText("a1", "ā");
      replaceText("a2", "á");
      replaceText("a3", "ǎ");
      replaceText("a4", "à");
      replaceText("e1", "ē");
      replaceText("e2", "é");
      replaceText("e3", "ě");
      replaceText("e4", "è");
      replaceText("i1", "ī");
      replaceText("i2", "í");
      replaceText("i3", "ǐ");
      replaceText("i4", "ì");
      replaceText("o1", "ō");
      replaceText("o2", "ó");
      replaceText("o3", "ǒ");
      replaceText("o4", "ò");
      replaceText("u1", "ū");
      replaceText("u2", "ú");
      replaceText("u3", "ǔ");
      replaceText("u4", "ù");
      replaceText("ü1", "ǖ");
      replaceText("ü2", "ǘ");
      replaceText("ü3", "ǚ");
      replaceText("ü4", "ǜ");
      replaceText("an1", "ān");
      replaceText("an2", "án");
      replaceText("an3", "ǎn");
      replaceText("an4", "àn");
      replaceText("ang1", "āng");
      replaceText("ang2", "áng");
      replaceText("ang3", "ǎng");
      replaceText("ang4", "àng");
      replaceText("en1", "ēn");
      replaceText("en2", "én");
      replaceText("en3", "ěn");
      replaceText("en4", "èn");
      replaceText("eng1", "ēng");
      replaceText("eng2", "éng");
      replaceText("eng3", "ěng");
      replaceText("eng4", "èng");
      replaceText("in1", "īn");
      replaceText("in2", "ín");
      replaceText("in3", "ǐn");
      replaceText("in4", "ìn");
      replaceText("ong1", "ōng");
      replaceText("ong2", "óng");
      replaceText("ong3", "ǒng");
      replaceText("ong4", "òng");
      replaceText("un1", "ūn");
      replaceText("un2", "ún");
      replaceText("un3", "ǔn");
      replaceText("un4", "ùn");
      replaceText("er2", "ér");
      replaceText("er3", "ěr");
      replaceText("er4", "èr");
      replaceText("aō", "āo");
      replaceText("aó", "áo");
      replaceText("aǒ", "ǎo");
      replaceText("aò", "ào");
      replaceText("oū", "ōu");
      replaceText("oú", "óu");
      replaceText("oǔ", "ǒu");
      replaceText("où", "òu");
      replaceText("aī", "āi");
      replaceText("aí", "ái");
      replaceText("aǐ", "ǎi");
      replaceText("aì", "ài");
      replaceText("eī", "ēi");
      replaceText("eí", "éi");
      replaceText("eǐ", "ěi");
      replaceText("eī", "èi");
    }, 0);
  });
}

function adchar(specialChar) {
  const textarea = document.getElementById("textoUsuario");
  const insertStartPoint = textarea.selectionStart;
  const insertEndPoint = textarea.selectionEnd;
  let value = textarea.value;

  value =
    value.slice(0, insertStartPoint) +
    specialChar +
    value.slice(insertEndPoint);
  textarea.value = value;
}

function copyText() {
  // Get the text field
  var copyText = document.getElementById("textoUsuario");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  let chequeo = copyText.value;
  if (chequeo !== "") {
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    // Alert the copied text
    // alert("Texto copiado: " + copyText.value);
    textarea.focus();
  }
}

function eraseText() {
  document.getElementById("textoUsuario").value = "";

  textarea.focus();
}

