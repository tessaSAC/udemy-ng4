import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', // Example of component as an ELEMENT
  // selector: '[app-servers]', // Example of using ATTR selector instead of DIRECTIVE
  selector: '.app-servers', // Example of component as a CLASS
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
