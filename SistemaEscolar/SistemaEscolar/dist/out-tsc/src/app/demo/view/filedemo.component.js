import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumb.service';
let FileDemoComponent = class FileDemoComponent {
    constructor(breadcrumbService, messageService) {
        this.breadcrumbService = breadcrumbService;
        this.messageService = messageService;
        this.uploadedFiles = [];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'File', routerLink: ['/components/file'] }
        ]);
    }
    onUpload(event) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Upload Completed' });
    }
};
FileDemoComponent = __decorate([
    Component({
        templateUrl: './filedemo.component.html',
        providers: [MessageService]
    }),
    __metadata("design:paramtypes", [BreadcrumbService, MessageService])
], FileDemoComponent);
export { FileDemoComponent };
//# sourceMappingURL=filedemo.component.js.map