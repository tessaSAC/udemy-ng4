import { Component } from '@angular/core'; // imports `Component` from angular's core functionality package

// Use a `decorator` to enhance JS; in this case a component class
// Feed it a config object -- values must be STRINGS
// Prepend selector names with `app-` to avoid risk of overwriting native HTML selectors
// Path to templateUrl is RELATIVE for WEBPACK BUNDLING
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})


export class ServerComponent {

}