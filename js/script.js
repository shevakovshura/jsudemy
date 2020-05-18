'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов", "");
        const b = prompt("Во сколько его оцените?", "");
    
        if(a != null && b != null && a !='' && b != '' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        }else{
            console.log('Error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }
}


function showMyDB(){
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres();

console.log(personalMovieDB);


// if (4 == 4){
//     console.log("verno");
// }else{
//     console.log("error");
// }

// const num = 50;

// if (num < 49){
//     console.log("Error");
// }else if (num > 100){
//     console.log("Слишком много");
// }else{
//     console.log("ok")
// }

// (num == 50) ? console.log("ok") : console.log("Error");

// const num = 50;
// switch (num) {
//     case 49:
//         console.log('Neverno');
//         break;
//     case 100:
//         console.log("")
// }

// let num = 50;

// while (num <= 55){
//     console.log("huy");
//     num++;
// }

// do {
//     console.log(num);
// }
// while (num < 55);

// for (let i = 1; i < 8; i++){
//     if (i === 6){
//         continue;
//     }
//     console.log(i);
// }

// let num = 20; глобальная переменна

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10; 
// }

// showFirstMessage("Hello world");

// function calc(a,b) {
//     return(a + b);
// }
// console.log(calc(4,3));


// const calc = (a,b) => a + b;

// let str = "test";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let fruit = "some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";
// console.log(logg.slice(6,11));

// let sh = "sheff best";
// console.log(sh.slice());

// let num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
