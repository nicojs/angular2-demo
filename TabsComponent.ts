/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, NgFor, bootstrap, Parent} from 'angular2/angular2';

/**
 * Created by nicojs on 7/31/2015.
 */
@Component({
    selector: 'tabs'
})
@View({
    template: `
        <ul class="nav nav-tabs">
        <li *ng-for="#tab of tabs"><a href="#">{{tab.title}}</a></li>
        </ul>

    <content></content>
    `,
    directives: [NgFor]
})
export class TabsComponent {
    tabs:Array<TabComponent>;

    constructor() {
        this.tabs = [];
    }

    addTab(tab:TabComponent) {
        this.tabs.push(tab);
    }
}

@Component({
    selector: 'tab',
    properties: ['title: tab-title']
})
@View({
    template: `
    <div></div>
    `
})
export class TabComponent {
    title:string;

    constructor(@Parent() tabs:TabsComponent) {
        tabs.addTab(this);
    }
}
