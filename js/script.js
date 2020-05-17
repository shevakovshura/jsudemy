'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

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

if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
}else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
}else{
    console.log("Произошла ошибка");
}

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


