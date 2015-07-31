/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {TabsComponent, TabComponent } from 'TabsComponent';

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    template: `<h1>Hello {{ name }}</h1>

    <tabs>
        <tab tab-title="Left">
            <h2>Left side</h2>
        </tab>
        <tab tab-title="Right">
            <h2>Right side</h2>
        </tab>
    </tabs>
    `,
    directives: [TabsComponent, TabComponent]
})
class MyAppComponent {
    name:string;

    constructor() {
        this.name = 'Alice';
    }
}


bootstrap(MyAppComponent);