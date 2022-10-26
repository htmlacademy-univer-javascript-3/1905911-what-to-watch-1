import {FilmType} from '../../types/film-type';
import FilmCard from '../FilmCard/film-card';

type FilmsListProps = {
  films: FilmType[];
}

export default function FilmsList({films}: FilmsListProps) {

  return (
    <>
      {films.map((film) => <FilmCard key={film.id} film={film}/>)}
    </>
  );
}
