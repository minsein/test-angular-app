import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import * as i0 from "@angular/core";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        PostsService
    ], imports: [[
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            AppRoutingModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                imports: [
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    AppRoutingModule
                ],
                declarations: [
                    AppComponent,
                    ContactFormComponent,
                    SignupFormComponent,
                    PostsComponent,
                    NavbarComponent,
                    HomeComponent
                ],
                providers: [
                    PostsService
                ],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        ContactFormComponent,
        SignupFormComponent,
        PostsComponent,
        NavbarComponent,
        HomeComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule] }); })();
//# sourceMappingURL=app.module.js.map