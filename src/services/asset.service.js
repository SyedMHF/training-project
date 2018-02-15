"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("../environments/environment");
require("rxjs/add/operator/map");
var AssetService = /** @class */ (function () {
    function AssetService(http) {
        this.http = http;
        // no op
    }
    AssetService.prototype.findAssets = function () {
        return this.http.get(environment_1.environment.endpoint + '/assets.json').map(function (res) { return res; });
    };
    AssetService.prototype.findAssetByAssetNo = function (assetNo) {
        return this.http.get(environment_1.environment.endpoint + '/asset.json').map(function (res) { return res; });
    };
    AssetService = __decorate([
        core_1.Injectable()
    ], AssetService);
    return AssetService;
}());
exports.AssetService = AssetService;
