"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var asset_status_enum_1 = require("./asset-status.enum");
var asset_category_enum_1 = require("./asset-category.enum");
var AssetCreatorDialog = /** @class */ (function () {
    // constructor
    function AssetCreatorDialog(assetService, router, route, snackBar, formBuilder, dialog) {
        this.assetService = assetService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
    }
    AssetCreatorDialog.prototype.ngOnInit = function () {
        this.editorForm = this.formBuilder.group({
            assetNo: ['', forms_1.Validators.required],
            description: ['', [(forms_1.Validators.required)]],
            status: [asset_status_enum_1.AssetStatus.AVAILABLE, [(forms_1.Validators.required)]],
            category: [asset_category_enum_1.AssetCategory.COMPUTER, [(forms_1.Validators.required)]],
            cost: ['', [(forms_1.Validators.required)]],
        });
    };
    AssetCreatorDialog.prototype.save = function (asset) {
        console.log(JSON.stringify(asset));
        this.dialog.close();
    };
    AssetCreatorDialog = __decorate([
        core_1.Component({
            selector: 'qs-asset-creator',
            templateUrl: './asset-creator.dialog.html',
        })
    ], AssetCreatorDialog);
    return AssetCreatorDialog;
}());
exports.AssetCreatorDialog = AssetCreatorDialog;
