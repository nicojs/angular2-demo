/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {TabsComponent, TabComponent } from 'TabsComponent';

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    template: `<h1>Hello {{ name.value }}</h1>
            <div class="form-group">
                <input class="form-control" name="name" type="text" #name />
            </div>
            <button class="btn btn-success">Bound without angular2</button>
            {{buttonClicked}}
    <tabs (tab-switched)="tabSwitched($event)">
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
    buttonClicked: boolean;

    constructor() {
        this.name = 'Alice';
        document.querySelector('.btn-success').addEventListener('click', () =>{
            window.setTimeout(() => this.buttonClicked = true, 2000);
        });
    }

    tabSwitched(event){
        console.log(event);
    }
}


bootstrap(MyAppComponent);