import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let BreadcrumbService = class BreadcrumbService {
    constructor() {
        this.itemsSource = new Subject();
        this.itemsHandler = this.itemsSource.asObservable();
    }
    setItems(items) {
        this.itemsSource.next(items);
    }
};
BreadcrumbService = __decorate([
    Injectable()
], BreadcrumbService);
export { BreadcrumbService };
//# sourceMappingURL=breadcrumb.service.js.map