import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';
let DocumentationComponent = class DocumentationComponent {
    constructor(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Documentation', routerLink: ['/documentation'] }
        ]);
    }
};
DocumentationComponent = __decorate([
    Component({
        templateUrl: './documentation.component.html',
        styles: [`
        .docs pre.doc-command {
            font-family: monospace;
            background-color: #434A63;
            color: #ffffff;
            padding: 1em;
            font-size: 14px;
            border-radius: 3px;
            overflow: auto;
        }

        .docs p,
        .docs li {
            line-height: 1.5;
        }`
        ]
    }),
    __metadata("design:paramtypes", [BreadcrumbService])
], DocumentationComponent);
export { DocumentationComponent };
//# sourceMappingURL=documentation.component.js.map