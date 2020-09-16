import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';
let EmptyDemoComponent = class EmptyDemoComponent {
    constructor(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Pages' },
            { label: 'Empty', routerLink: ['/pages/empty'] }
        ]);
    }
};
EmptyDemoComponent = __decorate([
    Component({
        templateUrl: './emptydemo.component.html'
    }),
    __metadata("design:paramtypes", [BreadcrumbService])
], EmptyDemoComponent);
export { EmptyDemoComponent };
//# sourceMappingURL=emptydemo.component.js.map