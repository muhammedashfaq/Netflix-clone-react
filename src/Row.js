import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/";


export const Row = ({title,fetchUrls ,isLargeRow}) => {
 

   const [movies , setMovies] = useState([])
    const [trailerUrl ,setTrailerUrl] = useState("")
   
   useEffect(()=>{
     
     async function fetchData(){
        const requests = await axios.get(fetchUrls);
       setMovies(requests.data.results);
       return requests
    }
    fetchData();

  },[fetchUrls] )

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };  

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.original_title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div  className='row'>
    

      <h2 style={{ color:"white"}}>{title}</h2>

<div className="row__posters">

{movies.map((movie)=>(
  <img  key={movie.id}
  onClick={()=> handleClick(movie)}
  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
   
   src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
))}

</div>


{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

    </div>
  )
}

export default Row 