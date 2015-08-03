/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, NgFor, bootstrap, Parent, EventEmitter} from 'angular2/angular2';


/**
 * Created by nicojs on 7/31/2015.
 */
@Component({
    selector: 'tabs',
    events: ['tabSwitched']
})
@View({
    template: `
    <ul class="nav nav-tabs">
        <li *ng-for="#tab of tabs" [class.active]="tab.isActive">
            <a href="#" (click)="activateTab(tab)">{{tab.title}}</a>
        </li>
    </ul>

    <content></content>
    `,
    directives: [NgFor]
})
export class TabsComponent {
    tabs:Array<TabComponent>;
    tabSwitched: EventEmitter;

    constructor() {
        this.tabs = [];
        this.tabSwitched =  new EventEmitter();
    }

    addTab(tab:TabComponent) {
        this.tabs.push(tab);
    }

    activateTab(tab:TabComponent) {
        this.tabs.forEach(tag => tag.isActive = false);
        tab.isActive = true;
        this.tabSwitched.next('tabSwitched');
        //return false;
    }
}

@Component({
    selector: 'tab',
    properties: ['title: tab-title']
})
@View({
    template: `
    <div [hidden]="!isActive"><content></content></div>
    `
})
export class TabComponent {
    title:string;
    isActive:boolean;

    constructor(@Parent() tabs:TabsComponent) {
        tabs.addTab(this);
    }
}
