import { Component, OnInit, Input } from '@angular/core';
import { Videogame } from '../_model/videogame.model';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() videogames: Videogame[];
  @Input() isLoading = true;

  constructor() {}

  ngOnInit() {}
}
