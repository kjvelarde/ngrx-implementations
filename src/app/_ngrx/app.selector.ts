import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideogameState } from './reducers/videogame-reducer';

export const getVideogameState = createFeatureSelector<VideogameState>(
  'videogame'
);

export const getLoadStatus = createSelector(
  getVideogameState,
  (state: VideogameState) => state.isLoading
);

export const getVideogameEntities = createSelector(
  getVideogameState,
  (state: VideogameState) => state.entities
);

export const getAllVideogames = createSelector(
  getVideogameEntities,
  // [1,2,..] => entities[1] => Videogame
  entities => {
    return Object.keys(entities).map(key => entities[key]);
  }
);

export const query = {
  getLoadStatus,

  getVideogameState,
  getVideogameEntities,
  getAllVideogames
};
