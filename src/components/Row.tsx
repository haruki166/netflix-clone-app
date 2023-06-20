import YouTube from "react-youtube";
import axios from "../api/axios";
import { API_KEY } from "../api/request";
import "./Row.scss";
import React, { useEffect, useState } from "react";

const base_url = "https://image.tmdb.org/t/p/original";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

type Opition = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  const opts: Opition = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let traileurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=${API_KEY}`
      );
      setTrailerUrl(traileurl.data.results[0]?.key);
    }
  };

  return (
    <div className="Row">
      <h2 className="Row-title">{title}</h2>
      <div className="Row-posters">
        {/* ポスターこんてんつ */}
        {movies.map((movie, i) => {
          return (
            <>
              {title === "今人気の作品" ? <span className="Row-ranknumber">{i + 1}</span> : ""}
              <img
                key={movie.id}
                className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
                onClick={() => handleClick(movie)}
              />
            </>
          );
        })}
      </div>
      {trailerUrl && (
        <YouTube videoId={trailerUrl} opts={opts} className="Row-youtube" />
      )}
    </div>
  );
};

export default Row;
