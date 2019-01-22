import { ActionTypes, VideogameLoaded } from './app.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, delay, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Videogame } from '../_model/videogame.model';

@Injectable()
export class AppEffects {
  videogames: Videogame[] = [
    {
      id: 0,
      title: 'Witcher 3',
      posterUrl:
        'https://www.bing.com/th?id=Aa79768914289a323f5f69ab528ea69b4&pid=Api',
      year: '2015'
    },
    {
      id: 1,
      title: 'God of War',
      posterUrl: 'https://www.gamestop.com/common/images/lbox/127507b.jpg',
      year: '2017'
    },
    {
      id: 2,
      title: 'Ghost of Tsushima',
      posterUrl:
        'https://78.media.tumblr.com/0fb239149e87c682b90ded0258afb961/tumblr_oywy2eoj4O1ukholjo1_500.gif',
      year: 'TBD'
    },
    {
      id: 3,
      title: 'Cyberpunk 2077',
      posterUrl:
        'http://wallpapersdsc.net/wp-content/uploads/2015/10/Cyberpunk_2077_12.jpg',
      year: 'TBD'
    }
  ];

  constructor(private actions$: Actions) {}

  @Effect()
  loadVideogames$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.VIDEOGAME_LOAD),
    map(() => this.videogames),
    delay(4000),
    map((videogames: Videogame[]) => new VideogameLoaded(videogames))
  );
}
