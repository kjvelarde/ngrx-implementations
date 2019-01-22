import { VideogameLoad } from './_ngrx/app.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Videogame } from './_model/videogame.model';
import { VideogameState } from './_ngrx/reducers/videogame-reducer';
import { getLoadStatus, getAllVideogames } from './_ngrx/app.selector';
import { AppFacade } from './_ngrx/app.facade';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  videogames$: Observable<Videogame[]>;
  isLoading$: Observable<boolean>;
  constructor(
    private readonly store: Store<VideogameState>,
    readonly appFacade: AppFacade
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new VideogameLoad());
    this.isLoading$ = this.store.select(getLoadStatus);
    this.videogames$ = this.store.select(getAllVideogames);
  }
}
