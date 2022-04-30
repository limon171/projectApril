"use strict";

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
     console.log(num);
     num++;
}

while (num <= 55); 

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i);
}


let num = 20;

//функция название_функции(аргументы функции)
function showFirstMessage(text) {
    //выполняет действие
    console.log(text);
    //переменная 
    num = 10;
    console.log(num);
}

//обращаемся в функции 
showFirstMessage("Hello world");
console.log(num);




let num = 20; //глобальная переменная

//функция название_функции(аргументы функции)
function showFirstMessage(text) {
    //выполняет действие
    console.log(text);
    //переменная 
    let num = 10; //локальная переменная
    console.log(num); //обращенние к локальной переменной 
}

/*Замыкание функции - это сама функция вместе со всеми 
внешними переменными, которые ей доступны
*/

//обращаемся в функции 
showFirstMessage("Hello world");
console.log(num); //обращается к глобальной переменной 

/* Если переменная не находит на своем уровне значение 
переменной, то она идет на уровень выше до тех пор 
покак не найдет значение переменной 
*/

/*Функция - это один из принципов оптимизации вашего кода 
*/



//функция название_функции(аргументы функции)
function calc (a, b) {
    return (a + b);
}
//выполняет действие(название_функции(значения))
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


//выполняет действие(название_функции(значения))
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

//функция название_функции(аргументы функции)
function calc (a, b) {
    return (a + b);
}


function ret () {
    let num = 50;


    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function(){
    console.log("Hello")
};
logger();


const calc = (a, b) =>{
    console.log('1');
    return a + b;
}

////////////////////////////////////////////////////////////////////////////
//17. Методы и свойсва и строк и чисел

const str = "teST";
const arr = [1, 2, 4];

// console.log(str[2] = 'd');
//выполняет действие( .метод())
// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

/*метод, котрый позволяет найти кусочек вашей строки 
и сказать с какой позиции она начинается */
//поиск подстроки 
let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

//методы которые взаимодействуют со строками ".slice"
const logg = "Hello world";
                                                           // 
//выполняет действие(обращение к строчкке.название_функции(начало позиции верезания, указываем конечные значения вырезания))
console.log(logg.slice(6, 11));

//метод "substring"
console.log(logg.substring(6, 11));

//метод substr(начало позиции, сколько символов необходимо вырезать)
console.log(logg.substr(6, 5));

//для работы с числами используем библеотеку "math"

const num = 12.2;

//выполняет действие(обращение к строчкке.математическая_функция.округление(значение, которое нужно округлить))
console.log(Math.round(num));

const test = "12.2px";
//(переводит_число_в_другую_систему_исчисления)
console.log(parseInt(test));
console.log(parseFloat(test));



////////////////////////////////////////////////////////////////////////
//19. Callback функция

function first() {
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second () {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);


//////////////////////////////////////////////////////////
//20.Объекты, деструктуризация объектов (ES6) 
"use strict";

const options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

//delete options.name;

//console.log(options);

// for-чтобы_перебрать_все_свойства_объекта
//(let-указываем_в_каком_объекте_мы_будем_перебирать_эти_свойства 
//key-условное_обозначение in-в options-указываем_где_будем_искать_значения)
let counter = 0;
for (let key in options) {
    //условие(проверка_типа_данных(объект[ключ]) === объект)
    if (typeof(options[key] === 'object')) {
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
        }
    
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);

////////////////////////////////////////////
//21. Массивы и псевдонимы 

"use strict",

const arr = [1, 2, 3, 6, 8];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, i, arr){
    //(порядковый_номер: значение_элеммента_под_этим_номером внутри массива ссылка_на _массив)
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


//удалить элеммент в конце массива
// arr.pop();
//добавить элеммент в конце массива
// arr.push(10);

// console.log(arr);
 
//метод_for (of) можно использовать break и continue
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(",");
console.log(products);



////////////////////////////////////////////////////
//22. Передача по ссылке или по значению, Spread оператор (ES6-ES9)
"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a); 

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; 

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10

console.log(newNumbers);
console.log(numbers); 

const add = {
    d: 17,
    e: 20
};

const clone = (Object.assign({}, add));

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adasdasda';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

/////////////////////////////////////////////////////////
//26. Динамическая типизация в JS
"use strict";

//To String
//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
//при сложении со строкой всеравно будет строка
console.log(typeof(5 + ''));

const num = 5;

console.log("http://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

//To Number

//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+ '5'));

//3)
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

//To boolean

//0, '', null, undefined, NaN; ложь

//1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!"4444"));