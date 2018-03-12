import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-reconfig',
  templateUrl: './reconfig.component.html',
  styleUrls: ['./reconfig.component.scss']
})
export class ReconfigComponent implements OnInit {

  version: string = environment.version;
  machines  = ['machine1', 'machine2', 'machine3'];

  constructor() { }

  ngOnInit() { }
}
