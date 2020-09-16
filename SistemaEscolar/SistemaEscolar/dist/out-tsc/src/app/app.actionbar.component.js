import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';
let AppActionBarComponent = class AppActionBarComponent {
    constructor(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
AppActionBarComponent = __decorate([
    Component({
        selector: 'app-actionbar',
        templateUrl: './app.actionbar.component.html'
    }),
    __metadata("design:paramtypes", [BreadcrumbService])
], AppActionBarComponent);
export { AppActionBarComponent };
//# sourceMappingURL=app.actionbar.component.js.map