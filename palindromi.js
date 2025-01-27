function TarkistaPalindromi(sana) {
  let kaannetty = "";
  for (let i = sana.length - 1; i >= 0; i--) {
    kaannetty += sana[i];
  }

  if (sana === kaannetty) {
    return true;
  } else {
    return false;
  }
}

const input = require("readline-sync");

// Pyydetään käyttäjää syöttämään sana
const sana = input.question("Anna sana: ");

// Tarkistetaan, onko sana palindromi
if (TarkistaPalindromi(sana)) {
  console.log("Sana on palindromi!");
} else {
  console.log("Sana ei ole palindromi.");
}

// Kutsutaan funktiota ja testataan eri sanoilla
//const sanat = ["saippuakauppias", "kissa", "anna", "aatto", "pussi"];
//sanat.forEach((sana) => {
//console.log(`Onko sana "${sana}" palindromi?`, TarkistaPalindromi(sana));
//});
