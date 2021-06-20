import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function ContactFormComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "First name is required.");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("First name should be at least ", _r1.errors == null ? null : _r1.errors.minlength.requiredLength, " characters.");
} }
function ContactFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, ContactFormComponent_div_7_div_1_Template, 2, 0, "div", 11);
    i0.ɵɵtemplate(2, ContactFormComponent_div_7_div_2_Template, 2, 1, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors == null ? null : _r1.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors == null ? null : _r1.errors.minlength);
} }
export class ContactFormComponent {
    log(x) {
        console.log(x);
    }
    submit(f) {
        console.log(f);
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
ContactFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactFormComponent, selectors: [["contact-form"]], inputs: { firstName: "firstName" }, decls: 14, vars: 1, consts: [["ngNativeValidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "firstName"], ["ngModel", "", "name", "firstName", "required", "", "minlength", "3", "id", "firstName", "type", "text", 1, "form-control", 3, "change"], ["firstName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "comment"], ["ngModel", "", "name", "comment", "id", "comment", "cols", "30", "rows", "10", 1, "form-control"], [1, "btn", "btn-primary"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "form", 0, 1);
        i0.ɵɵlistener("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r5); const _r0 = i0.ɵɵreference(1); return ctx.submit(_r0); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "label", 3);
        i0.ɵɵtext(4, "First Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "input", 4, 5);
        i0.ɵɵlistener("change", function ContactFormComponent_Template_input_change_5_listener() { i0.ɵɵrestoreView(_r5); const _r1 = i0.ɵɵreference(6); return ctx.log(_r1); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, ContactFormComponent_div_7_Template, 3, 2, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 2);
        i0.ɵɵelementStart(9, "label", 7);
        i0.ɵɵtext(10, "Comment");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "textarea", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 9);
        i0.ɵɵtext(13, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(6);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", _r1.touched && !_r1.valid);
    } }, directives: [i1.NgControlStatusGroup, i1.NgForm, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i1.RequiredValidator, i1.MinLengthValidator, i2.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactFormComponent, [{
        type: Component,
        args: [{
                selector: 'contact-form',
                templateUrl: './contact-form.component.html',
                styleUrls: ['./contact-form.component.css']
            }]
    }], null, { firstName: [{
            type: Input,
            args: ['firstName']
        }] }); })();
//# sourceMappingURL=contact-form.component.js.map