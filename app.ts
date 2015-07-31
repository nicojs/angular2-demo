/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import TabsComponent from './TabsComponent';

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    template: `<h1>Hello {{ name }}</h1>
    <tabs>
    </tabs>
    `,
    directives: [TabsComponent]

})
class MyAppComponent {
    name:string;

    constructor() {
        this.name = 'Alice';
    }
}


bootstrap(MyAppComponent);