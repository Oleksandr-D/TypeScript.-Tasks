// 👉 Завдання 1:
// Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)
// — Створіть змінну city з типом даних string.
// — Присвойте їй значення «Київ».
// — Змініть значення змінної city на «Львів».
// — Створіть змінну address з типом даних string і скопіюйте в неї значення змінної city.
// — Вивести значення змінної address з допомогою команди console.log().
let city:string;
city ='Київ';
city = 'Lviv';
var address:string = city;
console.log('Task 1 ==>', address);

// 👉 Завдання 2:
// Використовуючи конструкцію if..else через тернарний вираз, напишіть код, 
// який отримує число через prompt, а потім виводить в console.log() повідомлення:
// — Число парне.
// — Число непарне.
// — Число 0.
// let getNum: number = +prompt('Enter number');
// const res = (getNum === 0) ? 'Число 0.' : (getNum%2 !== 0) ? 'Число непарне'
//  : 'Число парне';
// console.log('Task 2 ==>',res);

// 👉 Завдання 3:
// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// — Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// — Кількість параметрів у функції може бути від 2х і більше.
// Приклад роботи:
// — max(5,-2) – має повернути 5.
// — max(5,-2, 30, 6) – має повернути 30
// function max(...arg:Array<number>){
// let res:number = Math.max(...arg)
// console.log('Task 3 ==>',res);
// }
// max(5,-2);
// max(5,-2, 30, 6);
// max(5,-2, 30, 6,-200,26,-10000,500);

// 👉 Завдання 4:
// Напишіть функцію getSqrt(number), яка вираховує корінь квадратний.
// Для визначення кореня використовуйте Math. В залежності від того
// що передали в функцію має виводити наступні повідомлення:
// — Якщо передане число повертати - Квадратний корінь з стільки то
// дорівнює стільки то.
// — Якщо передали не число - Повинно бути числове значення.
// — Якщо число менше 0 - Введіть додатнє число.
// — Якщо в функцію нічого не передали - Будь ласка, введіть число!
// let getNum : number | string = prompt('Enter number');
// function getSqrt(getNum): void{
//     if(getNum >= 0 && getNum !=='' && getNum !== null  ){
//         let sq:number = Math.sqrt(getNum)
//        console.log(`Квадратний корінь з ${getNum} дорівнює ${sq}.`)
//        }
//     else if(getNum < 0){
//         console.log('Введіть додатнє число')   
//        }
//     else if(typeof getNum == 'string' && getNum !== '' ){
//            console.log('Повинно бути числове значення')   
//           }
//     else if(getNum === ''){
//            console.log('Будь ласка, введіть число!')
//        }
// }
// getSqrt(getNum)

// 👉 Завдання 5:
// Необхідно відтворити функціонал як на відео Cenzor, а саме:
// — При кліку на ADD добавляти заборонене слово, яке відображатиметься
//  в списку “Bad words”
// — Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
// — При кліку на Cenzor перевіряється чи є в textarea заборонене слово,
//  якщо так його заміняє на *, причому на ту кількість яка довжина слова
// — Якщо textarea порожня виводити повыдолення про заповнення поля
const add:HTMLElement = document.getElementById('add');
const reset:HTMLElement  = document.querySelector('#reset');
const cenzor:HTMLElement = document.getElementById('cenzor');
const textarea:HTMLCollectionOf<HTMLTextAreaElement> = document.getElementsByTagName('textarea');
let bad_words:HTMLElement = document.querySelector('.bad_words');
let word = document.querySelector('#word') as HTMLInputElement;
let all_bad_words:Array<string> = [];
//create bad words, button add
add.onclick = function(){
    if(word.value == ''){
    alert('Please write a bad word!')
    }
    else{
        all_bad_words.push(word.value)
        bad_words.innerHTML= `Bad words: ${all_bad_words}`;
        word.value='';
    }  
}
 //button "Reset"
 reset.onclick = function(){
    all_bad_words=[];
    bad_words.innerHTML= `Bad words: `;
}
//check textarea
cenzor.onclick = function(){
if(textarea[0].value == ''){
        alert('Please write text for cenzor!')
        }
else {       
let check_words = textarea[0].value.split(' ')
textarea[0].value = '';
for(let i = 0; i<check_words.length; i++){
    if(all_bad_words.some(n => n === check_words[i])){
        let str:string = check_words[i].slice(check_words[i].length);
        check_words[i] = str.padStart(check_words[i].length,'*');
    }
}
let checked = check_words.join(' ');
textarea[0].value += checked;
}
event.preventDefault()
};

