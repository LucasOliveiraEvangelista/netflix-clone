import React from 'react'
import { useEffect } from 'react';
import categories, { getMovies } from '../api';
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = React.useState({});

    const fetchRandomMovie = async (_path) => {
        try {
            const NetflixOriginalsCategory =  categories.find((category) => category.name == 'originals');
            const data = await getMovies(NetflixOriginalsCategory.path);
            const movies = data.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
        } catch (error) {
            console.log("Banner Error", error)
        }
    };

    useEffect(() => {
        fetchRandomMovie();
    }, [])

    function truncate(str, n) {
        return str?.lenght > n ? str.subtr(0, n - 1) + "..." : str;
    }

  return (
    <header className="banner-container" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
    
    }}>
        <div className="banner-content">
            <div className="banner-title">
                {movie?.title || movie?.name || movie?.original_name}
            </div>
           <div className="banner-button-container">
                <div className="banner-button">
                    Assistir
                </div>
                <div className="banner-button">
                    Minha Lista
                </div>
           </div>
            <div className="banner-description">
                <h1>{truncate(movie?.overview)}</h1>
            </div>
        </div>
    </header>
  )
}

export default Banner;
