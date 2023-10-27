import React, { useEffect, useState } from "react";
import GlobalAPI from "../../API/GlobalAPI";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function MovieRow({ categoryId, rowId }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = () => {
    GlobalAPI.getMovieById(categoryId).then((resp) => {
      /* console.log(resp); */
      setdata(resp.data.results);
    });
  };
  /* console.log(data); */

  const slideLeft = () => {
    var slider = document.getElementById("slide" + rowId);
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    var slider = document.getElementById("slide" + rowId);
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div className="relative flex items-center">
      <MdChevronLeft
        size={40}
        className="text-red-900 z-50 rounded-full cursor-pointer hidden xl:block"
        onClick={slideLeft}
      />
      <div
        id={"slide" + rowId}
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        {data.map((items, index) => (
          <div key={items.id} className="inline-block mx-1 py-3 px-1">
            <img
              src={`https://image.tmdb.org/t/p/original/${items?.backdrop_path}`}
              alt={items?.title}
              className="block w-[120px] h-[90px] xl:w-[200px] xl:h-[130px] object-cover object-left-top
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
  );
}

export default MovieRow;
