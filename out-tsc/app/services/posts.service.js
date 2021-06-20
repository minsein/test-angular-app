import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PostsService {
    constructor(http) {
        this.http = http;
        this.url = 'http://stagingapi.lifestyleatthepark.com.au/api/member';
    }
    getPosts() {
        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Secret-Token': '371230987844:&?u4j9v5HBgKE?84%J^A@wv&RkAGTTVLasV4gg4yeZS!'
        };
        const requestOptions = {
            headers: new HttpHeaders(headerDict),
        };
        return this.http.get(this.url, requestOptions);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(i0.ɵɵinject(i1.HttpClient)); };
PostsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=posts.service.js.map