import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumb.service';
let MessagesDemoComponent = class MessagesDemoComponent {
    constructor(service, breadcrumbService) {
        this.service = service;
        this.breadcrumbService = breadcrumbService;
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Messages', routerLink: ['/components/messages'] }
        ]);
    }
    showInfoViaToast() {
        this.service.add({ key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }
    showWarnViaToast() {
        this.service.add({ key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }
    showErrorViaToast() {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }
    showSuccessViaToast() {
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }
    showMultipleViaToast() {
        this.service.addAll([
            { key: 'tst', severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' },
            { key: 'tst', severity: 'info', summary: 'Message 2', detail: 'PrimeReact rocks' },
            { key: 'tst', severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' }
        ]);
    }
    showInfoViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }
    showWarnViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }
    showErrorViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }
    showSuccessViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }
    showMultipleViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    }
};
MessagesDemoComponent = __decorate([
    Component({
        templateUrl: './messagesdemo.component.html',
        styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
            min-width: 8em;
        }

        :host ::ng-deep .ui-message {
            margin-left: .25em;
        }
    `],
        providers: [MessageService]
    }),
    __metadata("design:paramtypes", [MessageService, BreadcrumbService])
], MessagesDemoComponent);
export { MessagesDemoComponent };
//# sourceMappingURL=messagesdemo.component.js.map