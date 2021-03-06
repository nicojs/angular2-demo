var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var TabsComponent = (function () {
    function TabsComponent() {
        this.tabs = [];
        this.tabSwitched = new angular2_1.EventEmitter();
    }
    TabsComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
    };
    TabsComponent.prototype.activateTab = function (tab) {
        this.tabs.forEach(function (tag) { return tag.isActive = false; });
        tab.isActive = true;
        this.tabSwitched.next('tabSwitched');
    };
    TabsComponent = __decorate([
        angular2_1.Component({
            selector: 'tabs',
            events: ['tabSwitched']
        }),
        angular2_1.View({
            template: "\n    <ul class=\"nav nav-tabs\">\n        <li *ng-for=\"#tab of tabs\" [class.active]=\"tab.isActive\">\n            <a href=\"#\" (click)=\"activateTab(tab)\">{{tab.title}}</a>\n        </li>\n    </ul>\n\n    <content></content>\n    ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], TabsComponent);
    return TabsComponent;
})();
exports.TabsComponent = TabsComponent;
var TabComponent = (function () {
    function TabComponent(tabs) {
        tabs.addTab(this);
    }
    TabComponent = __decorate([
        angular2_1.Component({
            selector: 'tab',
            properties: ['title: tab-title']
        }),
        angular2_1.View({
            template: "\n    <div [hidden]=\"!isActive\"><content></content></div>\n    "
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [TabsComponent])
    ], TabComponent);
    return TabComponent;
})();
exports.TabComponent = TabComponent;
