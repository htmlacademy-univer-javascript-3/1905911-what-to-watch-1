import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FilmType} from '../../types/film-type';
import PromoPlayer from '../PromoPlayer/promo-player';
import {AppRoutes} from '../../utils/const';

type FilmCardProps = {
  film: FilmType
}

export default function FilmCard({film}: FilmCardProps): JSX.Element {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)} onClick={() => navigate(AppRoutes.FilmsRoot + film.id)}
    >
      <div className="small-film-card__image">
        <PromoPlayer film={film} cardActive={isActive}/>
      </div>
      <h3 className="small-film-card__title">
        <span className="small-film-card__link">
          {film.name}
        </span>
      </h3>
    </article>
  );
}
