function transcrire() {
  var car = document.conversion.saisie.value;

  car = car.replace(/a1/g, "ā");
  car = car.replace(/a2/g, "á");
  car = car.replace(/a3/g, "ǎ");
  car = car.replace(/a4/g, "à");
  car = car.replace(/e1/g, "ē");
  car = car.replace(/e2/g, "é");
  car = car.replace(/e3/g, "ě");
  car = car.replace(/e4/g, "è");
  car = car.replace(/i1/g, "ī");
  car = car.replace(/i2/g, "í");
  car = car.replace(/i3/g, "ǐ");
  car = car.replace(/i4/g, "ì");
  car = car.replace(/o1/g, "ō");
  car = car.replace(/o2/g, "ó");
  car = car.replace(/o3/g, "ǒ");
  car = car.replace(/o4/g, "ò");
  car = car.replace(/u1/g, "ū");
  car = car.replace(/u2/g, "ú");
  car = car.replace(/u3/g, "ǔ");
  car = car.replace(/u4/g, "ù");
  car = car.replace(/ü1/g, "ǖ");
  car = car.replace(/ü2/g, "ǘ");
  car = car.replace(/ü3/g, "ǚ");
  car = car.replace(/ü4/g, "ǜ");
  car = car.replace(/an1/g, "ān");
  car = car.replace(/an2/g, "án");
  car = car.replace(/an3/g, "ǎn");
  car = car.replace(/an4/g, "àn");
  car = car.replace(/ang1/g, "āng");
  car = car.replace(/ang2/g, "áng");
  car = car.replace(/ang3/g, "ǎng");
  car = car.replace(/ang4/g, "àng");
  car = car.replace(/en1/g, "ēn");
  car = car.replace(/en2/g, "én");
  car = car.replace(/en3/g, "ěn");
  car = car.replace(/en4/g, "èn");
  car = car.replace(/eng1/g, "ēng");
  car = car.replace(/eng2/g, "éng");
  car = car.replace(/eng3/g, "ěng");
  car = car.replace(/eng4/g, "èng");
  car = car.replace(/in1/g, "īn");
  car = car.replace(/in2/g, "ín");
  car = car.replace(/in3/g, "ǐn");
  car = car.replace(/in4/g, "ìn");
  car = car.replace(/ong1/g, "ōng");
  car = car.replace(/ong2/g, "óng");
  car = car.replace(/ong3/g, "ǒng");
  car = car.replace(/ong4/g, "òng");
  car = car.replace(/un1/g, "ūn");
  car = car.replace(/un2/g, "ún");
  car = car.replace(/un3/g, "ǔn");
  car = car.replace(/un4/g, "ùn");
  car = car.replace(/er2/g, "ér");
  car = car.replace(/er3/g, "ěr");
  car = car.replace(/er4/g, "èr");
  car = car.replace(/aō/g, "āo");
  car = car.replace(/aó/g, "áo");
  car = car.replace(/aǒ/g, "ǎo");
  car = car.replace(/aò/g, "ào");
  car = car.replace(/oū/g, "ōu");
  car = car.replace(/oú/g, "óu");
  car = car.replace(/oǔ/g, "ǒu");
  car = car.replace(/où/g, "òu");
  car = car.replace(/aī/g, "āi");
  car = car.replace(/aí/g, "ái");
  car = car.replace(/aǐ/g, "ǎi");
  car = car.replace(/aì/g, "ài");
  car = car.replace(/eī/g, "ēi");
  car = car.replace(/eí/g, "éi");
  car = car.replace(/eǐ/g, "ěi");
  car = car.replace(/eī/g, "èi");

  document.conversion.saisie.value = car;
}

function adchar(char) {
  var textarea = document.conversion.saisie;
  if (document.selection) {
    textarea.focus();
    sel = document.selection.createRange();
    sel.text = char;
  } //IE support
  else {
    document.conversion.saisie.value += char;
    textarea.focus();
  }
}
 
function copyText() {
  // Get the text field
  var copyText = document.getElementById("saisie");

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
  document.getElementById("saisie").value = "";

  textarea.focus();
}


/**------------------------ */

