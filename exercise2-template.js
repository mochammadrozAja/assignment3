/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak minimal 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */ 
let cek = false;
function threeStepsAB(text) {
    let cek = false;
  for (let index = 0; index < text.length-4; index++) {
    // console.log(text[index], text[index + 4])
    if (((text[index] == "a") && (text[index + 4] == "b")) || ((text[index] == "b") && (text[index + 4] == "a"))) {
        cek = true;
    }
  }
  return cek;
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false
console.log(threeStepsAB("arsyad")); // false


