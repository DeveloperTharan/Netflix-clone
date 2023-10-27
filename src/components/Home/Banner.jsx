import React, { useEffect, useState } from "react";
import BannerRow from './BannerRow'
import GlobalAPI from "../../API/GlobalAPI";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = () => {
    GlobalAPI.getNetflixOriginal().then((resp) => {
      /* console.log(resp); */
      setMovie(
        resp.data.results[
          Math.floor(Math.random() * resp.data.results.length - 1)
        ]
      );
    });
  };
/*   console.log(movie); */

  const descriptionhandeler = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <section className="w-full">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] 2xl:h-[100vh] bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="2xl:h-[100vh] w-full object-cover"
        />
        <div className="absolute top-[9%] sm:top-[12%] lg:top-[30%] 2xl:top-[20%] w-full">
          <div className="container mx-auto">
            <div className="2xl:ml-7 4xl:ml-0">
              <h1
                className="text-xl md:text-2xl lg:text-4xl 2xl:text-5xl 4xl:text-6xl w-3/4 
                xl:w-3/5 font-bold lg:mb-4"
              >
                {movie?.title || movie?.name}
              </h1>
              <div className="mb-1 lg:mb-2">
                <button 
                  className="border text-[8px] lg:text-[17px] bg-[#E50914] text-white z-30
                  border-[#E50914] lg:rounded-md px-1 py-[0.5] lg:px-4 lg:py-[4px] 2xl:px-5 xl:py-2"
                >
                  Play
                </button>
                <button 
                  className="border text-[8px] lg:text-[17px] text-white border-gray-300 z-30
                  px-1 py-[0.5] lg:rounded-md lg:px-4 lg:py-[4px] 2xl:px-5 xl:py-2 ml-4"
                >
                  Watch Later
                </button>
              </div>
              <div className="text-[12px] lg:text-[17px] mb-1 lg:mb-2">
                Relesed:{" "}
                <span className="text-gray-600">{movie?.first_air_date}</span>
              </div>
              <p 
                className="2xl:hidden w-[60%] lg:max-w-[70%] xl:max-w-[50%] 2xl:max-w-[35%] text-gray-600 
                text-[8px]"
              >
                {descriptionhandeler(`${movie?.overview}`, 200)}
              </p>
              <p 
                className="hidden 2xl:block w-full lg:max-w-[70%] xl:max-w-[50%] 2xl:max-w-[35%] text-gray-600 
                text-[14px]"
              >
                {descriptionhandeler(`${movie?.overview}`, 200)}
              </p>
            </div>
            <div className="mt-5 w-1/2 hidden 2xl:block">
              <BannerRow/>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
