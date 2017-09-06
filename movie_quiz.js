var Movie = function Movie(title, director, writer, star) {
    this.Title = title;
    this.Director = director;
    this.Writer = writer;
    this.Star = star;

    this.GetMovieName = function GetMovieName() {
        return "The movie is called " + myMovie.Title + ". Directed by " + myMovie.Director + " and written by " + myMovie.Writer + ", starring " + myMovie.Star + "."
        
    }

}

var myMovie = new Movie ("Raiders of the Lost Ark", "Steven Spielberg", "George Lucas", "Harrison Ford");

console.log(myMovie.GetMovieName());