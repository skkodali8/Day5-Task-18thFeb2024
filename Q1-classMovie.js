/* 
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

*/

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.//

class Movie {
    constructor(title) {
    this.tile = title;
    this.studio = "XXXXX";
    this.rating = "XX";
}
}

// //-------------------------------------------------------------------------------------------------------------------------------------//

// // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.//

class Movie {
  constructor(title) {
    this.tile = title;
    this.studio = "XXXXX";
    this.rating = "PG";
  }
}

let movie1 = new Movie("Casino Royal");
let movie2 = new Movie("The Avengers");
let movie3 = new Movie("Wonka");
let movie4 = new Movie("Alice  in the pool");
let movie5 = new Movie("Conjuring");

movie1.studio = "Metro Golden";
movie2.studio = "Marvel Studios";
movie3.studio = "Metro Golden";
movie4.studio = "Universal";
movie5.studio = "Marvel";

movie1.rating = "A";
movie5.rating = "A";

let movies = [];

movies.push(movie1);
movies.push(movie2);
movies.push(movie3);
movies.push(movie4);
movies.push(movie5);

console.log(movies);

//----------------------------------------------------------------------------------------------------------------------------------------------------------//


// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.//

class Movie {
    constructor(title) {
        this.title = title;
        this.studio = "XXXXX";
        this.rating = "XX";
    }
    getPG() {
        let ratings = {
            "01" : "PG",
            "02" : "A",
        }
        return ratings[this.rating];
    }
}

let movie1 = new Movie("Casino Royal");
let movie2 = new Movie("The Avengers");
let movie3 = new Movie("Wonka");
let movie4 = new Movie("Alice in the pool");
let movie5 = new Movie("Conjuring");

movie1.studio = "Metro Golden";
movie2.studio = "Marvel Studios";
movie3.studio = "Metro Golden";
movie4.studio = "Universal";
movie5.studio = "Marvel";

movie1.rating = "02";
movie5.rating = "02";
movie2.rating = "01";
movie3.rating = "01";
movie4.rating = "01";

let movies = [];

movies.push(movie1);
movies.push(movie2);
movies.push(movie3);
movies.push(movie4);
movies.push(movie5);

let moviesPG = [];

for (let movie of movies) {
    if (movie.getPG() === "PG") {
        moviesPG.push(movie);
    }
}

console.log(moviesPG);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------//

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”//

class Movie {
    constructor(title) {
    this.tile = title;
    this.studio = "XXXXX";
    this.rating = "";
    }
}


let movie1 = new Movie("Casino Royal");
movie1.studio = "Eon Productions";
movie1.rating = "A";

console.log(movie1);