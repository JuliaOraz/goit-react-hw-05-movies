import { getCast, getPoster } from '../../services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastBox,
  CastList,
  CastItem,
  CastImg,
  CastName,
  CastText,
  CastEmpty,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    try {
      getCast(movieId).then(data => setActors(data.cast));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (actors === null) {
    return;
  }

  return (
    <CastBox>
      {actors.length > 0 ? (
        <CastList>
          {actors.map(({ id, name, profile_path, character }) => {
            const img = getPoster(profile_path);
            return (
              <CastItem key={id}>
                <CastImg src={img} alt={name} />
                <CastName>{name}</CastName>
                <CastText>
                  <b>Character:</b> {character}
                </CastText>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <CastEmpty>We don't have data about the actors</CastEmpty>
      )}
    </CastBox>
  );
};

export default Cast;
