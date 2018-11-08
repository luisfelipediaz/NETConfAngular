import { Component, OnInit } from '@angular/core';
import { Tasks } from '../task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tasks: Tasks;

  constructor() { }

  ngOnInit() {
  }

}
