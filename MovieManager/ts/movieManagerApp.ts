import { Movie } from "./movie";

let movie1:Movie = new Movie(1, "Twilight", 2008, "PG-13", "Catherine Hardwick" );
let movie2:Movie = new Movie(2, "Silence of the Lambs", 1991, "R", "Jonathan Demme");
let movie3:Movie = new Movie(3, "Thor", 2011, "PG-13", "Kenneth Branagh");

let movies: Movie[] = [movie1, movie2, movie3];
let movie4:Movie = new Movie(4, "Black Widow", 2021, "PG-13", "Case Shortland");
movies.push(movie4);

console.log("List of Movies");
console.log("Id", "Movie Title", "Year", "Rating", "Director");

movies.forEach(m => {
    console.log(m.id, m.title, m.year, m.rating, m.director); 
    
    // other way to loop

for(let m of movies) {
  console.log("Movie title = " +m.title);
}
});



