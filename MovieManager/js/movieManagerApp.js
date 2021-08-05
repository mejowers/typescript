"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("./movie");
var movie1 = new movie_1.Movie(1, "Twilight", 2008, "PG-13", "Catherine Hardwick");
var movie2 = new movie_1.Movie(2, "Silence of the Lambs", 1991, "R", "Jonathan Demme");
var movie3 = new movie_1.Movie(3, "Thor", 2011, "PG-13", "Kenneth Branagh");
var movies = [movie1, movie2, movie3];
var movie4 = new movie_1.Movie(4, "Black Widow", 2021, "PG-13", "Case Shortland");
movies.push(movie4);
console.log("List of Movies");
console.log("Id", "Movie Title", "Year", "Rating", "Director");
movies.forEach(function (m) {
    console.log(m.id, m.title, m.year, m.rating, m.director);
    // other way to loop
    for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
        var movie = movies_1[_i];
        console.log("Movie title = " + m.title);
    }
});
