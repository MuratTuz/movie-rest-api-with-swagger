var movies = require('../model/moviesData').moviesData;

exports.getAllMovies = () => {
    console.log(movies);
    return movies;
}

exports.getMovieById=(id)=> {
    let movie = movies.find(m => m.id == id);
    return movie;
}

exports.createMovie=(newMovie)=> {
    if (isMovieExist(newMovie)){
        movies.push(newMovie);
        return true;
    } 
    else return false;
}

exports.updateMovieById=(id, updatedMovieBody)=> {
    let movie = movies.find(m => m.id == id);
    if (movie && isMovieExist(updatedMovieBody)) {
        Object.assign(movie, updatedMovieBody);
        return movie; // updated movie
    } else
    return false;
}

exports.deleteMovieById = (id) => {
    let movie = movies.find(m => m.id == id);
    if (movie) {
        const newMovies = movies.filter(m => m.id != id);
        movies = newMovies;
        return true; 
    } else
    return false; 
}

const isMovieExist = (movie) =>{
    return (!isNaN(movie.id) && !isNaN(movie.income) && movie.name && movie.year && movie.genre);
}

