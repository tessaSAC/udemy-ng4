import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Must be UNIQUE (prepend with `app-`)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // could also make inline-styles: styles:  [` // backticks allow multiline
  // 	h3: dodgerblue;
  // `]
})
export class AppComponent {
  name = '';
}
