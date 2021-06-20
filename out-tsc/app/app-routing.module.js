import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[RouterModule.forRoot([
                { path: '', component: HomeComponent },
                { path: 'posts', component: PostsComponent },
                { path: 'contactform', component: ContactFormComponent }
            ], { enableTracing: true })], RouterModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forRoot([
                        { path: '', component: HomeComponent },
                        { path: 'posts', component: PostsComponent },
                        { path: 'contactform', component: ContactFormComponent }
                    ], { enableTracing: true })],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=app-routing.module.js.map