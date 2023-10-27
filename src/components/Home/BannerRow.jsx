import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import GlobalAPI from "../../API/GlobalAPI";

function TrendingMovies() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = () => {
    GlobalAPI.getNetflixOriginal().then((resp) => {
      /* console.log(resp); */
      setTrending(resp.data.results);
    });
  };
  /* console.log(trending); */

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 180;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 180;
  }

  return (
    <div className="relative flex items-center">
      <MdChevronLeft
        size={40}
        className="border border-white text-white z-30 rounded-full hover:bg-red-900
        hover:text-white hover:border-red-900 cursor-pointer absolute right-16 -top-14"
        onClick={slideLeft}
      />
      <div 
        id={'slider'} 
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        {trending.map((items, index) => (
          <div
            key={items?.id}
            className="w-[150px] inline-block mx-4 py-3 px-2"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${items?.poster_path}`}
              alt={items?.title}
              className="rounded-md cursor-pointer transition hover:scale-110 duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
      <MdChevronRight
        size={40}
        className="border border-white text-white z-30 rounded-full hover:bg-red-900
        hover:text-white hover:border-red-900 cursor-pointer absolute right-0 -top-14"
        onClick={slideRight}
      />
    </div>
  );
}

export default TrendingMovies;
