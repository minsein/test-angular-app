import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./navbar/navbar.component";
import * as i2 from "@angular/router";
export class AppComponent {
    constructor() {
        this.title = 'hello-world';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "navbar");
        i0.ɵɵelement(1, "router-outlet");
    } }, directives: [i1.NavbarComponent, i2.RouterOutlet], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map