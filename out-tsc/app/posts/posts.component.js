import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/posts.service";
import * as i2 from "@angular/common";
function PostsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function PostsComponent_li_3_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.updatePost(item_r2); });
    i0.ɵɵtext(2, "Update");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r2.firstname + " " + item_r2.surname, " ");
} }
export class PostsComponent {
    constructor(postservice) {
        this.postservice = postservice;
    }
    ngOnInit() {
        this.postservice.getPosts().subscribe(response => {
            this.posts = response;
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    createPost(title) {
        // let post = {title: title.value};
        // title.value ="";
        // this.http.post<Post>(this.url, post)
        // .subscribe(response=>{
        //   post['id']= response.id;
        //   this.posts.splice(0, 0, post);
        //   console.log(response);
        // })
    }
    updatePost(post) {
        //this.http.patch(this.url, post.title);
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(i0.ɵɵdirectiveInject(i1.PostsService)); };
PostsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostsComponent, selectors: [["posts"]], decls: 4, vars: 1, consts: [["type", "text", 1, "form-control", 3, "keyup.enter"], ["title", ""], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "btn", "btn-default", "btn-sm", 3, "click"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "input", 0, 1);
        i0.ɵɵlistener("keyup.enter", function PostsComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r5); const _r0 = i0.ɵɵreference(1); return ctx.createPost(_r0); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ul", 2);
        i0.ɵɵtemplate(3, PostsComponent_li_3_Template, 4, 1, "li", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.posts);
    } }, directives: [i2.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostsComponent, [{
        type: Component,
        args: [{
                selector: 'posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.css']
            }]
    }], function () { return [{ type: i1.PostsService }]; }, null); })();
//# sourceMappingURL=posts.component.js.map