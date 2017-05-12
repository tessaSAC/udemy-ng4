import { Component } from '@angular/core';


@Component ({
	selector: 'app-warning-alert',
	templateUrl: './warning-alert.component.html',
	styleUrls: ['./warning-alert.component.css']
}) // NO SEMICOLON HERE
// The problem is the semi-colon separating the @Component() from SideKikComponent class. @Component is an annotation attached to the class that follows it. So a class must follow it. If you remove the semi colon as well as the exported class so that @Component() is at the bottom of the file, you will get the exact same error, because @Component expects a class.
// "@Component is an annotation that tells Angular, that the class, which the annotation is attached to, is a component." -http://blog.thoughtram.io/angular/2015/05/03/the-difference-between-annotations-and-decorators.html

export class WarningAlertComponent {

}