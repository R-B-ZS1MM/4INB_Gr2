"use strict";
let x = "6.4";
console.log("Zmienna x to: ", x, " Jet typ to: ", typeof x);

let czyStudent = true;
console.log(czyStudent, typeof czyStudent);

const Pi = 3.14;
console.log(Pi);
// Pi = 6.28;

const tab = [1, 2, 3, 4];
console.table(tab, typeof tab);
console.log(tab[1]);
// tab = [2];
console.log(tab);
tab.push(5);
console.log(tab);

let num1 = 1;
let num2 = num1;
num2 = 2;

console.log(num1);
console.log(num2);

const tab1 = [1, 2, 3, 4, 5];
const tab2 = [...tab1];

tab1.push(6);

console.log(tab1);
console.log(tab2);

const myObj = {
  firstName: "Andżej",
  surname: "Kowalski",
  age: 17,
  isAdult: false,
};
console.log(myObj, typeof myObj);
console.log(myObj.surname);
console.log(myObj.age);

let imie = "Kunegunda";
let rokUr = 2001;

console.log("Nazywam się " + imie + ". Mam " + (2025 - rokUr) + " lat.");
console.log(`Nazywam się ${imie}. Mam ${2025 - rokUr} lat.`);
let text = `Nazywam się ${imie}. Mam ${2025 - rokUr} lat.`;
document.writeln(text);
// let czyWyjsc = confirm("Czy wyjść z programu?");
// dsgfsdg
let liczba = prompt("Podaj liczbę:");
// liczba = Number(liczba);
// liczba = parseInt(liczba);
liczba = liczba * 1;

console.log(liczba, typeof liczba);
console.log((3 + ""));
