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
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var TabsComponent_1 = require('TabsComponent');
var MyAppComponent = (function () {
    function MyAppComponent() {
        var _this = this;
        this.name = 'Alice';
        document.querySelector('.btn-success').addEventListener('click', function () {
            window.setTimeout(function () { return _this.buttonClicked = true; }, 2000);
        });
    }
    MyAppComponent.prototype.tabSwitched = function (event) {
        console.log(event);
    };
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "<h1>Hello {{ name.value }}</h1>\n            <div class=\"form-group\">\n                <input class=\"form-control\" name=\"name\" type=\"text\" #name />\n            </div>\n            <button class=\"btn btn-success\">Bound without angular2</button>\n            {{buttonClicked}}\n    <tabs (tab-switched)=\"tabSwitched($event)\">\n        <tab tab-title=\"Left\">\n            <h2>Left side</h2>\n        </tab>\n        <tab tab-title=\"Right\">\n            <h2>Right side</h2>\n        </tab>\n    </tabs>\n    ",
            directives: [TabsComponent_1.TabsComponent, TabsComponent_1.TabComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
