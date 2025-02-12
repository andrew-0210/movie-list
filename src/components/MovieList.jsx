'use client';
import { Movie } from './Movie';

export const MovieList = ({ movies }) => {
  return (
    <ul className='list'>
      {movies?.map(movie => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};
