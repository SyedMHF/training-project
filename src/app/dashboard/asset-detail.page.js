"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AssetDetailPage = /** @class */ (function () {
    // constructor
    function AssetDetailPage(assetService, router, route) {
        this.assetService = assetService;
        this.router = router;
        this.route = route;
        this.columns = [
            { name: 'referenceNo', label: 'Reference No' },
            { name: 'maintainedDate', label: 'Date' },
            { name: 'cost', label: 'Cost' },
        ];
    }
    AssetDetailPage.prototype.loadAsset = function (assetNo) {
        console.log('assetNo: ' + assetNo);
        this.asset$ = this.assetService.findAssetByAssetNo(assetNo);
    };
    AssetDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.loadAsset(params.assetNo);
        });
    };
    AssetDetailPage.prototype.ngOnDestroy = function () {
        // no op
    };
    AssetDetailPage.prototype.goBack = function () {
        this.router.navigate(['/dashboard']);
    };
    AssetDetailPage = __decorate([
        core_1.Component({
            selector: 'qs-asset-detail',
            templateUrl: './asset-detail.page.html',
        })
    ], AssetDetailPage);
    return AssetDetailPage;
}());
exports.AssetDetailPage = AssetDetailPage;
