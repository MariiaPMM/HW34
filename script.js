'use strict';

// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент <div id="text"> зникав.

// document.querySelector('button').addEventListener('click', function () {
// 	document.querySelector('#text').remove('#text');
// });

// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// document.querySelector('button').addEventListener('click', function () {
// 	document.querySelector('button').remove('button');
// });

// У змінній button знаходиться кнопка. Спочатку на ній немає обробників.
// Який з обробників запуститься? Що буде виведено під час кліку після виконання коду?
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);
//  *** 1 i 2***

// Створіть меню, яке відкривається/згортається після кліку:
// P.S. HTML/CSS вихідного документа можна і треба змінювати.

// let menuElem = document.getElementById('sweeties');
// let titleElem = menuElem.querySelector('.title');
// titleElem.onclick = function() {
//   menuElem.classList.toggle('open');
// };

// Є список повідомлень.
// За допомогою JavaScript для кожного повідомлення додайте у верхній правий кут кнопку закриття.
// Результат має виглядати, як показано тут:

// let panes = document.querySelectorAll('.pane');
// for (let pane of panes) {
// 	pane.insertAdjacentHTML(
// 		'afterbegin',
// 		'<button class="remove-button">[x]</button>'
// 	);
// 	pane.firstChild.onclick = () => pane.remove();
// }
