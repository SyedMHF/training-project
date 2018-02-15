"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var core_2 = require("@covalent/core");
var FLEX_LAYOUT_MODULES = [
    flex_layout_1.FlexLayoutModule,
];
var ANGULAR_MODULES = [
    forms_1.FormsModule, forms_1.ReactiveFormsModule,
];
var MATERIAL_MODULES = [
    material_1.MatButtonModule, material_1.MatCardModule, material_1.MatIconModule,
    material_1.MatListModule, material_1.MatMenuModule, material_1.MatTooltipModule,
    material_1.MatSlideToggleModule, material_1.MatInputModule, material_1.MatCheckboxModule,
    material_1.MatToolbarModule, material_1.MatSnackBarModule, material_1.MatSidenavModule,
    material_1.MatTabsModule, material_1.MatSelectModule, material_1.MatTableModule,
];
var COVALENT_MODULES = [
    core_2.CovalentDataTableModule, core_2.CovalentMediaModule, core_2.CovalentLoadingModule,
    core_2.CovalentNotificationsModule, core_2.CovalentLayoutModule, core_2.CovalentMenuModule,
    core_2.CovalentPagingModule, core_2.CovalentSearchModule, core_2.CovalentStepsModule,
    core_2.CovalentCommonModule, core_2.CovalentDialogsModule,
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ANGULAR_MODULES,
                MATERIAL_MODULES,
                FLEX_LAYOUT_MODULES,
                COVALENT_MODULES,
            ],
            declarations: [],
            exports: [
                ANGULAR_MODULES,
                MATERIAL_MODULES,
                FLEX_LAYOUT_MODULES,
                COVALENT_MODULES,
            ],
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
