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

const a = prompt("Один из последних просмотренных фильмов", "");
const b = prompt("Во сколько его оцените?", "");
const c = prompt("Один из последних просмотренных фильмов", "");
const d = prompt("Во сколько его оцените?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);