import { Videogame } from '../../_model/videogame.model';
import * as app from '../app.actions';
import { createSelector } from '@ngrx/store';

export interface VideogameState {
  dataset: Videogame[];
  entities: { [id: number]: Videogame };
  isLoaded: boolean;
  isLoading: boolean;
}

export const initialState: VideogameState = {
  dataset: [],
  entities: {},
  isLoading: false,
  isLoaded: false
};

export function videogameReducer(
  state = initialState,
  action: app.Actions
): VideogameState {
  switch (action.type) {
    case app.ActionTypes.VIDEOGAME_LOAD: {
      state = {
        ...state,
        isLoading: true
      };
      break;
    }

    case app.ActionTypes.VIDEOGAME_LOADED: {
      const entities = action.payload.reduce(
        (entity: { [id: number]: Videogame }, videogame: Videogame) => {
          return {
            ...entity,
            [videogame.id]: videogame
          };
        },
        {
          ...state.entities
        }
      );

      state = {
        ...state,
        dataset: action.payload,
        entities,
        isLoaded: true,
        isLoading: false
      };
      break;
    }

    case app.ActionTypes.VIDEOGAME_LOAD_FAIL: {
      state = {
        ...state,
        isLoading: false
      };
      break;
    }
  }

  return state;
}
