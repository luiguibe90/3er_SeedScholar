import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { CarService } from '../service/carservice';
import { ConfirmationService } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumb.service';
let OverlaysDemoComponent = class OverlaysDemoComponent {
    constructor(carService, confirmationService, breadcrumbService) {
        this.carService = carService;
        this.confirmationService = confirmationService;
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Overlays', routerLink: ['/components/overlays'] }
        ]);
    }
    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars.splice(0, 5));
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.images = [];
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos1.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg', title: 'Sopranos 1'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos2.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg', title: 'Sopranos 2'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos3.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg', title: 'Sopranos 3'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos4.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg', title: 'Sopranos 4'
        });
    }
    confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure to perform this action?'
        });
    }
};
OverlaysDemoComponent = __decorate([
    Component({
        templateUrl: './overlaysdemo.component.html',
        providers: [ConfirmationService]
    }),
    __metadata("design:paramtypes", [CarService, ConfirmationService,
        BreadcrumbService])
], OverlaysDemoComponent);
export { OverlaysDemoComponent };
//# sourceMappingURL=overlaysdemo.component.js.map