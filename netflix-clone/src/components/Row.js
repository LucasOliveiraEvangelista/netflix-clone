import React, { useEffect} from 'react'
import { getMovies } from '../api';
import ReactPlayer from 'react-player';
import './Row.css';

const imagehost = "https://image.tmdb.org/t/p/w500/";
function Row({title, path, isLarge}) {

    const [TrailerUrl, setTrailerUrl] = React.useState("");
    const handleOnClick = (movie) => {
        if(TrailerUrl) {
            setTrailerUrl("");
            console.log("vazio");
        }else {
        setTrailerUrl("https://www.youtube.com/watch?v=m2JsKyhtlG4");
        console.log("foi");
    
    }
    
}
    const [movies, setMovies] = React.useState([]);
    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            setMovies(data?.results);
        } catch (error) {
            console.log("fetchMovies  error", error);
        }
    };

    useEffect(() => {
      fetchMovies(path);
    }, [path]);
    

  return (
    <div className="row-container">
        <h2 className="row-header">{title}</h2>
        <div className="row-cards">
            {movies?.map((movie) => {
                return (
                    <img className={`movie-card ${isLarge && "movie-card-large"} ` } 
                            onClick={() => handleOnClick(movie)}
                            key={movie.id} 
                            src={`${imagehost}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name}>
                    </img>
                );
            })}
        </div>
    {TrailerUrl && <ReactPlayer url={setTrailerUrl} playing={true}/>}
    </div>
  )
  
}
export default Row;

