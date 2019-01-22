import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';

import { environment } from './../../../environments/environment';
import { videogameReducer, VideogameState } from './videogame-reducer';

export interface AppState {
  videogame: VideogameState;
}

// Not necessary - can be injected directly. 1 store = 1 reducer
export const reducers: ActionReducerMap<AppState> = {
  videogame: videogameReducer
};

// #region meta
export function debug(r: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return r(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [debug]
  : [];

//#endregion
