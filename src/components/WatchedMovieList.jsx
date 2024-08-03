'use client';
import StarRating from './StarRating';
import { WatchedMovie } from './WatchedMovie';

export const WatchedMovieList = ({ watched }) => {
  return (
    <ul className='list'>
      {watched.map(movie => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
      <StarRating maxRating={5} className='flex flex-col mt-10' />
    </ul>
  );
};
