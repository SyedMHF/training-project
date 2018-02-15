"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var asset_creator_dialog_1 = require("./asset-creator.dialog");
var DashboardPage = /** @class */ (function () {
    // constructor
    function DashboardPage(assetService, academicService, router, route, vcf, dialog) {
        this.assetService = assetService;
        this.academicService = academicService;
        this.router = router;
        this.route = route;
        this.vcf = vcf;
        this.dialog = dialog;
    }
    DashboardPage.prototype.loadPosts = function () {
        this.assets$ = this.assetService.findAssets();
        this.students$ = this.academicService.findStudents();
    };
    DashboardPage.prototype.viewAsset = function (asset) {
        console.log(JSON.stringify(asset));
        this.router.navigate(['/detail', asset.assetNo]);
    };
    // viewStudent(student: Student):void{
    //   console.log(JSON.stringify(student));
    //   this.router.navigate(['/detail', student.matricNumber]);
    // }
    DashboardPage.prototype.ngOnChanges = function () {
        console.log('ngOnChanges');
    };
    DashboardPage.prototype.ngOnInit = function () {
        console.log('test ngOnInit');
        this.loadPosts();
    };
    DashboardPage.prototype.ngDoCheck = function () {
        console.log('doCheck');
    };
    DashboardPage.prototype.ngOnDestroy = function () {
        // no op
        console.log('ngdestroy');
    };
    DashboardPage.prototype.showAddDialog = function () {
        console.log('showContainerDialog');
        var config = new material_1.MatDialogConfig();
        config.viewContainerRef = this.vcf;
        config.role = 'dialog';
        config.width = '70%';
        config.height = '60%';
        config.position = { top: '0px' };
        this.creatorDialogRef = this.dialog.open(asset_creator_dialog_1.AssetCreatorDialog, config);
        this.creatorDialogRef.afterClosed().subscribe(function (res) {
            console.log('close dialog');
        });
    };
    DashboardPage = __decorate([
        core_1.Component({
            selector: 'qs-dashboard',
            templateUrl: './dashboard.page.html',
        })
    ], DashboardPage);
    return DashboardPage;
}());
exports.DashboardPage = DashboardPage;
