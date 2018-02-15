"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var shared_module_1 = require("./shared/shared.module");
var app_routes_1 = require("./app.routes");
var http_1 = require("@angular/common/http");
var main_layout_1 = require("./main/main.layout");
var asset_service_1 = require("../services/asset.service");
var asset_detail_page_1 = require("./dashboard/asset-detail.page");
var dashboard_page_1 = require("./dashboard/dashboard.page");
var asset_creator_dialog_1 = require("./dashboard/asset-creator.dialog");
var ngx_charts_1 = require("@swimlane/ngx-charts");
var academic_service_1 = require("../services/academic.service");
var test_page_1 = require("./dashboard/test.page");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_page_1.DashboardPage,
                asset_detail_page_1.AssetDetailPage,
                asset_creator_dialog_1.AssetCreatorDialog,
                main_layout_1.MainLayout,
                test_page_1.TestPage,
            ],
            imports: [
                app_routes_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                shared_module_1.SharedModule,
                http_1.HttpClientModule,
                ngx_charts_1.NgxChartsModule,
            ],
            providers: [asset_service_1.AssetService, academic_service_1.AcademicService],
            entryComponents: [asset_creator_dialog_1.AssetCreatorDialog],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
