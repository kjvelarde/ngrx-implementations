import { Videogame } from '../_model/videogame.model';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  VIDEOGAME_LOAD = '[Video Game] Load',
  VIDEOGAME_LOADED = '[Video Game] Loaded',
  VIDEOGAME_LOAD_FAIL = '[Video Game] Load Failed'
}

export class VideogameLoad implements Action {
  readonly type = ActionTypes.VIDEOGAME_LOAD;
}

export class VideogameLoaded implements Action {
  readonly type = ActionTypes.VIDEOGAME_LOADED;
  constructor(readonly payload: Videogame[]) {}
}

export class VideogameLoadFail implements Action {
  readonly type = ActionTypes.VIDEOGAME_LOAD_FAIL;
}

export type Actions = VideogameLoad | VideogameLoaded | VideogameLoadFail;
