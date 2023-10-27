import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import GlobalAPI from "../../API/GlobalAPI";

function Originals() {

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
    var slider = document.getElementById('slideer');
    slider.scrollLeft = slider.scrollLeft - 180;
  }

  const slideRight = () => {
    var slider = document.getElementById('slideer');
    slider.scrollLeft = slider.scrollLeft + 180;
  }

  return (
    <div className="mt-10">
      <h2 className="text-gray-400 text-xl 2xl:text-2xl font-bold p-4">Netflix Originals</h2>
    <div className="relative flex items-center">
      <MdChevronLeft
        size={40}
        className="text-red-900 z-50 rounded-full cursor-pointer hidden xl:block"
        onClick={slideLeft}
      />
      <div 
        id={'slideer'} 
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        {trending.map((items, index) => (
          <div
            key={items?.id}
            className="w-[150px] inline-block mx-1 py-3 px-1"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${items?.poster_path}`}
              alt={items?.title}
              className="w-[220px] xl:w-[400px] object-cover object-left-top
              rounded-md cursor-pointer transition hover:scale-110 duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
      <MdChevronRight
        size={40}
        className="text-red-900 z-50 rounded-full cursor-pointer hidden xl:block"
        onClick={slideRight}
      />
    </div>
    </div>
  )
}

export default Originals