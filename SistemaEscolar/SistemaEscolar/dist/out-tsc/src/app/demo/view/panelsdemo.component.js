import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';
let PanelsDemoComponent = class PanelsDemoComponent {
    constructor(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Panels', routerLink: ['/components/panels'] }
        ]);
    }
    ngOnInit() {
        this.items = [
            { label: 'Angular.io', icon: 'pi pi-external-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'pi pi-file', routerLink: ['/theming'] }
        ];
    }
};
PanelsDemoComponent = __decorate([
    Component({
        templateUrl: './panelsdemo.component.html',
        styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
            margin-left: .25em;
        }

        :host ::ng-deep .ui-splitbutton button {
            margin-right: 0;
        }`
        ]
    }),
    __metadata("design:paramtypes", [BreadcrumbService])
], PanelsDemoComponent);
export { PanelsDemoComponent };
//# sourceMappingURL=panelsdemo.component.js.map