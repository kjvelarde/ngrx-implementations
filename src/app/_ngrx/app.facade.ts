import { query } from './app.selector';
import { Store } from '@ngrx/store';
import { VideogameLoad } from './app.actions';
import { Injectable } from '@angular/core';
import { VideogameState } from './reducers/videogame-reducer';

@Injectable()
export class AppFacade {
  isLoading$ = this.store.select(query.getLoadStatus);
  videogames$ = this.store.select(query.getAllVideogames);

  constructor(private store: Store<VideogameState>) {}

  loadVideogames() {
    this.store.dispatch(new VideogameLoad());
  }
}
